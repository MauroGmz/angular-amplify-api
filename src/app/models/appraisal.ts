import { PhotoI } from './photos';

export interface AppraisalI {
    id?: string;
    name: string;
    photos: [PhotoI]
}