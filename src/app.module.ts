import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EjemploControllerController } from './controladores/ejemplo-controller/ejemplo-controller.controller';
import { Ejemplo2Controller } from './controladores/ejemplo2/ejemplo2.controller';
import { ConfigModule } from '@nestjs/config';
import { ContactosController } from './controladores/contactos/contactos.controller';
import { ContactosService } from './services/contactos.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, EjemploControllerController, Ejemplo2Controller, ContactosController],
  providers: [ContactosService],
})
export class AppModule {}
