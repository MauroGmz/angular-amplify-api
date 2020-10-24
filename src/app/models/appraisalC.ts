import { PhotoICar, PhotoIDoc } from './photos';

export interface AppraisalI {
    id?: string;
    name: string;
    photos_cars?: [PhotoICar]
    photos_docs?: [PhotoIDoc]
}