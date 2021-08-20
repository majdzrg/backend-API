import { IsNotEmpty,  IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyUuidDto {
    @ApiProperty({
        description: 'uuid to verify buyer',
        format: 'uuid',
        uniqueItems: true,
      })
    @IsNotEmpty()
    @IsUUID()
    readonly verification: string;
}
