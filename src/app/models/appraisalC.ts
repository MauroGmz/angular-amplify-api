import { PhotoI } from './photos';

export interface AppraisalI {
    id?: string;
    name: string;
    photos_cars?: [PhotoI]
    photos_docs?: [PhotoI]
}