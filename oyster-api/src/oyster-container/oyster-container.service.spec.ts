import { Test, TestingModule } from '@nestjs/testing';
import { OysterContainerService } from './oyster-container.service';

describe('OysterContainerService', () => {
  let service: OysterContainerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OysterContainerService],
    }).compile();

    service = module.get<OysterContainerService>(OysterContainerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
