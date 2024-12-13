import { IsEmail, IsNotEmpty } from 'class-validator';

export class ContactoDto {
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  nombre: string;
  
  @IsNotEmpty({ message: 'El campo correo es obligatorio' })
  @IsEmail({},{message:'El correo no es válido'})
  correo: string;

  @IsNotEmpty({ message: 'El campo teléfono es obligatorio' })
  telefono: string;
}
