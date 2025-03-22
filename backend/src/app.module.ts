import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { MovieModule } from './movie/movie.module';


@Module({
  imports: [ MovieModule],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule { }
