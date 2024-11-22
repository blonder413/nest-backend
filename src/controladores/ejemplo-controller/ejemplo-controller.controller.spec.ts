import { Test, TestingModule } from '@nestjs/testing';
import { EjemploControllerController } from './ejemplo-controller.controller';

describe('EjemploControllerController', () => {
  let controller: EjemploControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EjemploControllerController],
    }).compile();

    controller = module.get<EjemploControllerController>(EjemploControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
