import { Test, TestingModule } from '@nestjs/testing';
import { BatchesController } from './batches.controller';

describe('BatchesController', () => {
  let controller: BatchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatchesController],
    }).compile();

    controller = module.get<BatchesController>(BatchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

// import { Test, TestingModule } from '@nestjs/testing';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// describe('AppController', () => {
//   let appController: AppController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [AppController],
//       providers: [AppService],
//     }).compile();

//     appController = app.get<AppController>(AppController);
//   });

//   describe('root', () => {
//     it('should return "Hello World!"', () => {
//       expect(appController.getHello()).toBe('Hello World!');
//     });
//   });
// });
