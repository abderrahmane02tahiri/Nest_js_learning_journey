import { Test, TestingModule } from '@nestjs/testing';
import { CycleIngController } from './cycle-ing.controller';

describe('CycleIngController', () => {
  let controller: CycleIngController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CycleIngController],
    }).compile();

    controller = module.get<CycleIngController>(CycleIngController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
