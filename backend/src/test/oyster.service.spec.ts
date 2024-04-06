import { Test, TestingModule } from '@nestjs/testing';
import { OysterService } from '../services/oyster.service';

describe('OysterService', () => {
  let service: OysterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OysterService],
    }).compile();

    service = module.get<OysterService>(OysterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
