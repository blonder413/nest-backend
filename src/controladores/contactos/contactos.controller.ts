import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
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
}
