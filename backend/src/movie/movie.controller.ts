import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly usersService: MovieService) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }
}
