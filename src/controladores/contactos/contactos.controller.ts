import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ContactoDto } from 'src/dto/contacto.dto';
import { ContactosService } from 'src/services/contactos.service';

@Controller('contactos')
export class ContactosController {
  constructor(private contactoService: ContactosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  index() {
    return this.contactoService.getDatos();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  show(@Param() param) {
    return this.contactoService.getDato(parseInt(param.id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  create(@Body() dto: ContactoDto) {
    return this.contactoService.create(dto);
  }
}
