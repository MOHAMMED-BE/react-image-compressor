# @mbs-dev/react-image-compressor

A package for compressing images efficiently and effectively in React applications.
Keep your image quality, save your storage and make your website faster.

## Installation
To add this package to your project, execute the following command in your terminal:

```bash
npm i @mbs-dev/react-image-compressor

```
## Usage

First, import the necessary functions from the package in your React component:

```javascript
import {compressAndAppendImage,ImageCompressor} from '@mbs-dev/react-image-compressor';

```
 ## Method -1 | using compressAndAppendImage function            

```javascript

const [imageFile, setimageFile] = useState<File>()
const formData = new FormData();
const imagefileFieldName = 'photo'
const quality = 0.8

//-- Using formik
await compressAndAppendImage(formik.values.image as unknown as File, formData,imagefileFieldName,quality)

//-- Using useState
await compressAndAppendImage(imageFile, formData,imagefileFieldName,quality)

```
 ## Method -2 | using ImageCompressor function                   

```javascript


const [imageFile, setImageFile] = useState<File>();
const formData = new FormData();
const quality = 0.2

//-- Using Formik
const compressedImage = await ImageCompressor(formik.values.image, quality);
const fieldName = formik.values.image as unknown as File;
const imagefileFieldName = fieldName.name.replace(' ', '-').slice(0, fieldName.name.lastIndexOf('.')) + '.webp';
formData.append('photo', compressedImage, imagefileFieldName);


//-- Using useState
const compressedImage = await ImageCompressor(imageFile, quality);
const fieldName = imageFile as File;
const imagefileFieldName = fieldName.name.replace(' ', '-').slice(0, fieldName.name.lastIndexOf('.')) + '.webp';
formData.append('photo', compressedImage, imagefileFieldName);

```
 ## Notes

 The imagefileFieldName parameter is used to specify a custom file name for the compressed image. When images are compressed, the default behavior is to return the compressed image with a generic name, often as 'blob'. By setting imagefileFieldName, you can define a meaningful name for the output file, making it easier to identify, organize, and reference the compressed images in your application or storage system.

 --------------
 
The quality parameter in image compression functions is used to specify the desired quality level of the compressed image. This parameter accepts values in the range from 0 to 1, where 0 represents the lowest possible quality (and thus the highest compression) and 1 represents the highest possible quality (and thus the lowest compression). Values between 0 and 1 allow you to balance between image quality and file size according to your needs.

---------------

When compressing images, particularly for products where detail and color accuracy are crucial—like cosmetics—it's essential to strike a balance between reducing file size and maintaining high-quality visuals. By setting the compression quality to around 95% to 99%, or equivalently, a quality parameter value of 0.2 , you can significantly reduce the image file size while ensuring the compressed images maintain quality that is virtually indistinguishable from the original images.


 ## Some experimental results

```javascript

//-- Using quality : 0.2
10Mb  -->  ~355Kb
15Mb  -->  ~368Kb
20Mb  -->  ~353Kb


//-- Using quality : 0.8
10Mb  -->  ~858Kb
15Mb  -->  ~939Kb
20Mb  -->  ~925Kb


```
Image size after compression can change depending on image content or other factors.

