import { Test, TestingModule } from '@nestjs/testing';
import { Ejemplo2Controller } from './ejemplo2.controller';

describe('Ejemplo2Controller', () => {
  let controller: Ejemplo2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ejemplo2Controller],
    }).compile();

    controller = module.get<Ejemplo2Controller>(Ejemplo2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
