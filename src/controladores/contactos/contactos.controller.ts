import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
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

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  update(@Param() param, @Body() dto: ContactoDto) {
    return this.contactoService.update(parseInt(param.id), dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  destroy(@Param() param) {
    return this.contactoService.destroy(parseInt(param.id));
  }
}
