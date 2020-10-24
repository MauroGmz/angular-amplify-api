import { PhotoICar } from './photos';

export interface AppraisalI {
    id?: string;
    name: string;
    photos: [PhotoICar]
}