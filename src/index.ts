import Compressor from 'compressorjs';

const ImageCompressor = async (imageFile: File | Blob, quality: number) => {
    const options = {
        quality: quality,
        // maxWidth: 800,
        // maxHeight: 800,
        mimeType: 'image/webp',
        // convertTypes:'image/png'
    };

    try {
        const compressedImage = await new Promise((resolve, reject) => {
            new Compressor(imageFile, {
                ...options,
                success: resolve,
                error: reject,
            });
        });

        return compressedImage;
    } catch (error) {
        return null;
    }
};


const compressAndAppendImage = async (file: File, formData: FormData, fieldName: any | string, quality: number) => {
    const compressedImage = await ImageCompressor(file, quality);

    console.log(compressedImage);
    
    const filename = file.name.replace(' ', '-').slice(0, file.name.lastIndexOf('.')) + '.webp';

    formData.append(fieldName, compressedImage as File, filename);
};


export { ImageCompressor }
export { compressAndAppendImage }