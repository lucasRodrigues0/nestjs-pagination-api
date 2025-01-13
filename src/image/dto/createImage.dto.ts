import { IsNotEmpty, IsString } from "class-validator";

export class CreateImageDTO {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
    
    @IsString()
    @IsNotEmpty()
    url: string;
}