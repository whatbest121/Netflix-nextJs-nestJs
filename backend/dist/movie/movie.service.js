"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const console_1 = require("console");
const rxjs_1 = require("rxjs");
const data_1 = require("../type/data");
let MovieService = class MovieService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    async findAll() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=c09f81d04bb6d129d00b9d1386a74f7c&language=en-US&page=1`;
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        const parseMovie = data_1.DataMovie.safeParse(response.data);
        const imagUrl = (imagPath) => {
            const result = imagPath ? `https://image.tmdb.org/t/p/original${imagPath}` : null;
            return result;
        };
        if (parseMovie.error)
            throw (0, console_1.error)(parseMovie.error);
        const result = parseMovie.data.results.map((v) => ({ ...v, backdrop_path: imagUrl(v.backdrop_path), poster_path: imagUrl(v.poster_path) }));
        return result;
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], MovieService);
//# sourceMappingURL=movie.service.js.map