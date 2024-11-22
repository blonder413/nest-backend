import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EjemploControllerController } from './controladores/ejemplo-controller/ejemplo-controller.controller';
import { Ejemplo2Controller } from './controladores/ejemplo2/ejemplo2.controller';

@Module({
  imports: [],
  controllers: [AppController, EjemploControllerController, Ejemplo2Controller],
  providers: [],
})
export class AppModule {}
