import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hero } from 'src/entities/hero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(Hero)
    private readonly heroRepository: Repository<Hero>,
  ) { }

  findAll(): Promise<Hero[]> {
    return this.heroRepository.find();
  }

  findOne(id: string): Promise<Hero> {
    return this.heroRepository
      .createQueryBuilder()
      .select("*")
      .where("id = :id", { id })
      .getOneOrFail();
  }

  async remove(id: string): Promise<void> {
    await this.heroRepository.delete(id);
  }
}
