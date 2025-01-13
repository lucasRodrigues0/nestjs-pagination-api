import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Image {

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    description: string;
    
    @Prop({required: true})
    url: string;

}

export const ImageSchema = SchemaFactory.createForClass(Image);