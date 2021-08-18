import { Module } from '@nestjs/common';
import { AppController } from './http/controllers/app.controller';
import { HeroController } from './http/controllers/hero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './configs/ormconfig';
import { AppService } from './services/app.service';
import { HeroService } from './services/hero.service';
import { Hero } from './entities/hero.entity';
import { CatModule } from './modules/cat/cat.module';
@Module({
  imports: [
    CatModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Hero])
  ],
  controllers: [AppController, HeroController],
  providers: [AppService, HeroService],
})
export class AppModule { }
