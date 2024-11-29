import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ContactosService {
  private prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getDatos() {
    return await this.prisma.contacto.findMany({ orderBy: [{ id: 'desc' }] });
  }

  async getDato(id: number) {
    const datos = await this.prisma.contacto.findFirst({ where: { id } });
    if (!datos) {
      throw new HttpException(
        { estado: 'error', mensaje: 'No encontrado' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return datos;
  }
}
