import { Hero } from '../../entities/hero.entity';

describe('Hero', () => {
  it('should be defined', () => {
    expect(new Hero()).toBeDefined();
  });
});
