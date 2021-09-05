import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { Cat } from '../entities/cat.entity';
import { CatRepository } from '../repositories/cat.repository';

@Injectable()
export class CatService {

  protected catRepository: CatRepository;
  constructor(catRepository: CatRepository) {
    this.catRepository = catRepository;
  }

  async create(createCatDto: CreateCatDto) {
    let cat: Cat = this.catRepository.create({ ...createCatDto });
    cat = await this.catRepository.save(cat);
    return cat;
  }

  findAll(breed: string = null) {
    return !breed ? this.catRepository.find() : this.catRepository.findByBreed(breed);
  }

  findOne(id: string) {
    return this.catRepository.findOne(id);
  }

  update(id: string, updateCatDto: UpdateCatDto) {
    return this.catRepository
      .createQueryBuilder()
      .update(Cat)
      .where("id = :id", { id })
      .set({ ...updateCatDto })
      .execute();
  }

  remove(id: string) {
    return this.catRepository
      .createQueryBuilder()
      .delete()
      .from(Cat)
      .where("id = :id", { id })
      .execute();
  }
}
