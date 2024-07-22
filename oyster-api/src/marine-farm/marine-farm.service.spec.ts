import { Test, TestingModule } from '@nestjs/testing';
import { MarineFarmService } from './marine-farm.service';

describe('MarineFarmService', () => {
  let service: MarineFarmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarineFarmService],
    }).compile();

    service = module.get<MarineFarmService>(MarineFarmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
