import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { CatController } from './controllers/cat.controller';
import { CatService } from './services/cat.service';
import { CatRepository } from './repositories/cat.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([CatRepository])
  ],
  controllers: [CatController],
  providers: [CatService]
})
export class CatModule { }
