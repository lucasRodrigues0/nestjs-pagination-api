import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Image {

    @Prop()
    title: string;

    @Prop()
    description: string;
    
    @Prop()
    url: string;

}

export const ImageSchema = SchemaFactory.createForClass(Image);