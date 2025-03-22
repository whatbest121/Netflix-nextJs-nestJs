"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMovie = void 0;
const zod_1 = require("zod");
exports.DataMovie = zod_1.z.object({
    page: zod_1.z.number(),
    results: zod_1.z.array(zod_1.z.object({
        adult: zod_1.z.boolean(),
        backdrop_path: zod_1.z.string().nullable(),
        genre_ids: zod_1.z.array(zod_1.z.number()),
        id: zod_1.z.number(),
        original_language: zod_1.z.string(),
        original_title: zod_1.z.string(),
        overview: zod_1.z.string(),
        popularity: zod_1.z.number(),
        poster_path: zod_1.z.string().nullable(),
        release_date: zod_1.z.string(),
        title: zod_1.z.string(),
        video: zod_1.z.boolean(),
        vote_average: zod_1.z.number(),
        vote_count: zod_1.z.number(),
    })),
    total_pages: zod_1.z.number(),
    total_results: zod_1.z.number(),
});
//# sourceMappingURL=data.js.map