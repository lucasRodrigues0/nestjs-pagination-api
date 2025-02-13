export declare class Image {
    title: string;
    description: string;
    url: string;
}
export declare const ImageSchema: import("mongoose").Schema<Image, import("mongoose").Model<Image, any, any, any, import("mongoose").Document<unknown, any, Image> & Image & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Image, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Image>> & import("mongoose").FlatRecord<Image> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
