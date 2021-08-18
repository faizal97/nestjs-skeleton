import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { CatController } from './controllers/cat.controller';
import { CatService } from './services/cat.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Cat])
  ],
  controllers: [CatController],
  providers: [CatService]
})
export class CatModule { }
