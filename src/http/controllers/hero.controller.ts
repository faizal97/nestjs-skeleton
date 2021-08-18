import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { CreateHeroDto } from 'src/dto/hero/create-hero-dto';
import { UpdateHeroDto } from 'src/dto/hero/update-hero-dto';
import { Hero } from 'src/entities/hero.entity';
import { HeroService } from 'src/services/hero.service';

@Controller('heroes')
export class HeroController {

  constructor(private readonly heroService: HeroService) {
  }

  @Post()
  create(@Body() heroDto: CreateHeroDto): string {
    return `This action adds a new hero name : ${heroDto.name}`;
  }

  @Get()
  async findAll() {
    const heroes = await this.heroService.findAll();
    return heroes;
  }

  @Get(':id')
  find(@Param() params): string {
    return `This action returns a #${params.id} hero`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() heroDto: UpdateHeroDto): string {
    return `This action update a #${id} hero`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This action delete a #${id} hero`;
  }
}
