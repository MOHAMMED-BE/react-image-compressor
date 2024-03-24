declare const imageCompressor: (imageFile: File | Blob, quality: number) => Promise<unknown>;
declare const compressAndAppendImage: (file: File, formData: FormData, fieldName: string, quality: number) => Promise<void>;
export { imageCompressor, compressAndAppendImage };
