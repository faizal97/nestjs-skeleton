import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CatService } from '../services/cat.service';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { DeleteResult } from 'typeorm';

@Controller('api/cats')
export class CatController {
  constructor(private readonly catService: CatService) { }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    const cat = await this.catService.create(createCatDto);
    return cat;
  }

  @Get()
  findAll(@Query('breed') breed: string) {
    return this.catService.findAll(breed);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    this.catService.update(id, updateCatDto);
    return this.catService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result: DeleteResult = await this.catService.remove(id);
    return {
      'affected': result.affected
    }
  }
}
