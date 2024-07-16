import { Test, TestingModule } from '@nestjs/testing';
import { MarineFarmController } from './marine-farm.controller';
import { MarineFarmService } from './marine-farm.service';

describe('MarineFarmController', () => {
  let controller: MarineFarmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarineFarmController],
      providers: [MarineFarmService],
    }).compile();

    controller = module.get<MarineFarmController>(MarineFarmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
