import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { firstValueFrom } from 'rxjs';
import { DataMovie } from 'src/type/data';
import { json } from 'stream/consumers';

@Injectable()
export class MovieService {
    constructor(private readonly httpService: HttpService) { }

    async findAll() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=c09f81d04bb6d129d00b9d1386a74f7c&language=en-US&page=1`;
        const response = await firstValueFrom(this.httpService.get(url))
        const parseMovie = DataMovie.safeParse(response.data)

        const imagUrl = (imagPath: string | null) => {
            const result = imagPath ? `https://image.tmdb.org/t/p/original${imagPath}` : null
            return result
        }
        if (parseMovie.error) throw error(parseMovie.error)
        const result = parseMovie.data.results.map((v) => ({ ...v, backdrop_path: imagUrl(v.backdrop_path), poster_path: imagUrl(v.poster_path) }))

        return result
    }
}
