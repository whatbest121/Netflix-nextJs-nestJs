import { z } from "zod";
export declare const DataMovie: z.ZodObject<{
    page: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        adult: z.ZodBoolean;
        backdrop_path: z.ZodNullable<z.ZodString>;
        genre_ids: z.ZodArray<z.ZodNumber, "many">;
        id: z.ZodNumber;
        original_language: z.ZodString;
        original_title: z.ZodString;
        overview: z.ZodString;
        popularity: z.ZodNumber;
        poster_path: z.ZodNullable<z.ZodString>;
        release_date: z.ZodString;
        title: z.ZodString;
        video: z.ZodBoolean;
        vote_average: z.ZodNumber;
        vote_count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        adult: boolean;
        backdrop_path: string | null;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string | null;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }, {
        adult: boolean;
        backdrop_path: string | null;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string | null;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }>, "many">;
    total_pages: z.ZodNumber;
    total_results: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page: number;
    results: {
        adult: boolean;
        backdrop_path: string | null;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string | null;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }[];
    total_pages: number;
    total_results: number;
}, {
    page: number;
    results: {
        adult: boolean;
        backdrop_path: string | null;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string | null;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }[];
    total_pages: number;
    total_results: number;
}>;
export type DataMovieType = z.infer<typeof DataMovie>;
