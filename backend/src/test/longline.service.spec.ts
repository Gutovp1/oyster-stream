import { Test, TestingModule } from '@nestjs/testing';
import { LonglineService } from '../services/longline.service';

describe('LonglineService', () => {
  let service: LonglineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LonglineService],
    }).compile();

    service = module.get<LonglineService>(LonglineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
