export enum ImageType {
  JPG = 'jpg',
  PNG = 'png',
}
export interface IGalleryItem {
  id: string;
  imageName: string;
  imageTtype: ImageType
}
