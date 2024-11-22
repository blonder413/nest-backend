import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EjemploDto } from 'src/dto/ejemplo.dto';
import { EjemploInterface } from 'src/interfaces/ejemplo-interface/ejemplo-interface.interface';

@Controller('ejemplo')
export class EjemploControllerController {
  @Get(':id')
  show(@Param() param) {
    return { mensaje: 'Método get', status: 200, data: param.id };
  }

  @Get()
  @Header('empresa', 'Cencosud')
  @HttpCode(HttpStatus.ACCEPTED)
  index(): EjemploInterface {
    return { mensaje: 'Método get', status: 200, data: [] };
  }

  @Post()
  create(@Body() dto: EjemploDto) {
    return { mensaje: 'Método Post', status: 200, data: dto };
  }

  @Put(':id')
  update(@Param() param) {
    return { mensaje: 'Método Put', status: 200 };
  }

  @Delete(':id')
  destroy(@Param() param) {
    return { mensaje: 'Método Delete', status: 200 };
  }
}
