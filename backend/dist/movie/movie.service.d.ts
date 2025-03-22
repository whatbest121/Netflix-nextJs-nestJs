import { HttpService } from '@nestjs/axios';
export declare class MovieService {
    private readonly httpService;
    constructor(httpService: HttpService);
    findAll(): Promise<{
        backdrop_path: string | null;
        poster_path: string | null;
        adult: boolean;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }[]>;
}
