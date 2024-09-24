import { IsInt, IsNumber, IsString, Min, MinLength } from "class-validator";
export class CreatePokemonDto {

  @IsInt({  message: 'No debe ser un número negativo' })
  @IsNumber( )
  @Min(1, { message: 'No debe ser menor que 1' })
  no: number;

  @IsString({ message: 'Debe ser texto' })
  @MinLength(1, { message: 'El nombre debe tener al menos 1 caracter' })
  name: string;
}
