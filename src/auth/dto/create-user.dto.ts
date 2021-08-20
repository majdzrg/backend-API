import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    // fullName
    @ApiProperty({
      example: 'pejman hadavi',
      description: 'The name of the admin',
      format: 'string',
      minLength: 6,
      maxLength: 255,
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    readonly fullName: string;

    // Role
    @ApiProperty({
        example: 'pejman hadavi',
        description: 'The name of the admin',
        format: 'boolean',
        minLength: 6,
        maxLength: 255,
      })
      @IsNotEmpty()
      @IsString()
      @MinLength(5)
      @MaxLength(255)
      readonly role: string;

    // phone
    @ApiProperty({
      example: 'pejman hadavi',
      description: 'The phone of the admin',
      format: 'string',
      minLength: 6,
      maxLength: 500,
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    readonly phone: string;

    // adresse
    @ApiProperty({
      example: 'pejman hadavi',
      description: 'The address of the admin',
      format: 'string',
      minLength: 8,
      maxLength: 10,
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    readonly address: string;

    // Email
    @ApiProperty({
      example: 'pejman@gmail.com',
      description: 'The email of the admin',
      format: 'email',
      uniqueItems: true,
      minLength: 5,
      maxLength: 255,
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    @IsEmail()
    readonly email: string;

    // Password
    @ApiProperty({
      example: 'secret password change me!',
      description: 'The password of the Buyer',
      format: 'string',
      minLength: 5,
      maxLength: 1024,
    })
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    readonly password: string;
  }
