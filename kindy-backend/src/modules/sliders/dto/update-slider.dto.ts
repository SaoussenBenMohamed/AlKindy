import { IsNotEmpty, IsOptional, IsString, IsBooleanString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
export class UpdateSliderDto {
  @ApiProperty()
  _id?: ObjectID;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Length(3, 80)
  readonly title: string;

  @ApiProperty()
  @IsBooleanString()
  @IsOptional()
  status: boolean;

  @ApiProperty()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsOptional()
  readonly url: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  @Length(0, 80)
  readonly titleDescription: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(0, 80)
  readonly description: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  @Length(3, 80)
  readonly btnName: string;
}
