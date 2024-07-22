import { Test, TestingModule } from '@nestjs/testing';
import { LonglineController } from './longline.controller';
import { LonglineService } from './longline.service';

describe('LonglineController', () => {
  let controller: LonglineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LonglineController],
      providers: [LonglineService],
    }).compile();

    controller = module.get<LonglineController>(LonglineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
