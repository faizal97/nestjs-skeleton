import { EntityRepository, Repository } from "typeorm";
import { Cat } from "../entities/cat.entity";

@EntityRepository(Cat)
export class CatRepository extends Repository<Cat> {
  findByBreed(breed: string): Promise<Cat[]> {
    return this.createQueryBuilder()
      .where("breed = :breed", { breed })
      .getMany()
  }
}