"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModule = void 0;
const common_1 = require("@nestjs/common");
const image_controller_1 = require("./image.controller");
const image_service_1 = require("./image.service");
const mongoose_1 = require("@nestjs/mongoose");
const image_schema_1 = require("../schemas/image.schema");
const image_schema_2 = require("../schemas/image.schema");
const core_1 = require("@nestjs/core");
let ImageModule = class ImageModule {
};
exports.ImageModule = ImageModule;
exports.ImageModule = ImageModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: image_schema_2.Image.name, schema: image_schema_1.ImageSchema }])],
        controllers: [image_controller_1.ImageController],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useValue: new common_1.ValidationPipe({
                    whitelist: true,
                    forbidNonWhitelisted: true
                })
            },
            image_service_1.ImageService
        ]
    })
], ImageModule);
//# sourceMappingURL=image.module.js.map