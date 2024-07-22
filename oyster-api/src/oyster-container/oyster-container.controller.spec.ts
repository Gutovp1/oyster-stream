import { Test, TestingModule } from '@nestjs/testing';
import { OysterContainerController } from './oyster-container.controller';
import { OysterContainerService } from './oyster-container.service';

describe('OysterContainerController', () => {
  let controller: OysterContainerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OysterContainerController],
      providers: [OysterContainerService],
    }).compile();

    controller = module.get<OysterContainerController>(
      OysterContainerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
