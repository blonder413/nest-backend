import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import { ContactoDto } from 'src/dto/contacto.dto';

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

  async create(dto: ContactoDto) {
    const existe = await this.prisma.contacto.findFirst({
      where: { correo: dto.correo },
    });

    if (existe) {
      throw new HttpException(
        { estado: 'error', mensaje: 'Ya existe' },
        HttpStatus.CONFLICT,
      );
    }
    await this.prisma.contacto.create({
      data: {
        nombre: dto.nombre,
        correo: dto.correo,
        telefono: dto.telefono,
        slug: slugify(dto.nombre.toLowerCase()),
      },
    });
    return { estado: 'ok', mensaje: 'Creado exitosamente' };
  }

  async update(id: number, dto: ContactoDto) {
    const dato = await this.prisma.contacto.findFirst({
      where: { id },
    });

    if (!dato) {
      throw new HttpException(
        { estado: 'error', mensaje: 'No existe' },
        HttpStatus.NOT_FOUND,
      );
    }

    await this.prisma.contacto.update({
      where: { id },
      data: {
        nombre: dto.nombre,
        correo: dto.correo,
        telefono: dto.telefono,
        slug: slugify(dto.nombre.toLowerCase()),
      },
    });
    return { estado: 'ok', mensaje: 'Modificado exitosamente' };
  }
}
