"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const image_service_1 = require("./image.service");
const createImage_dto_1 = require("./dto/createImage.dto");
let ImageController = class ImageController {
    constructor(service) {
        this.service = service;
    }
    getAllWithoutPagination() {
        return this.service.getAllWithoutPagination();
    }
    getAll(query) {
        return this.service.getAll(query);
    }
    create(body) {
        return this.service.create(body);
    }
};
exports.ImageController = ImageController;
__decorate([
    (0, common_1.Get)('all-no-pag'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "getAllWithoutPagination", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createImage_dto_1.CreateImageDTO]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "create", null);
exports.ImageController = ImageController = __decorate([
    (0, common_1.Controller)('image'),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], ImageController);
//# sourceMappingURL=image.controller.js.map