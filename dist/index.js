"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressAndAppendImage = exports.ImageCompressor = void 0;
const compressorjs_1 = __importDefault(require("compressorjs"));
const ImageCompressor = async (imageFile, quality) => {
    const options = {
        quality: quality,
        // maxWidth: 800,
        // maxHeight: 800,
        mimeType: 'image/webp',
        // convertTypes:'image/png'
    };
    try {
        const compressedImage = await new Promise((resolve, reject) => {
            new compressorjs_1.default(imageFile, {
                ...options,
                success: resolve,
                error: reject,
            });
        });
        return compressedImage;
    }
    catch (error) {
        return null;
    }
};
exports.ImageCompressor = ImageCompressor;
const compressAndAppendImage = async (file, formData, fieldName, quality) => {
    const compressedImage = await ImageCompressor(file, quality);
    console.log(compressedImage);
    const filename = file.name.replace(' ', '-').slice(0, file.name.lastIndexOf('.')) + '.webp';
    formData.append(fieldName, compressedImage, filename);
};
exports.compressAndAppendImage = compressAndAppendImage;
