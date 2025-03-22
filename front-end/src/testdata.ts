import { DataMovieType } from "./type/data"

export async function testdata() {
    const result = await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c09f81d04bb6d129d00b9d1386a74f7c&language=en-US&page=1")).json()
    return result as DataMovieType[]


}


