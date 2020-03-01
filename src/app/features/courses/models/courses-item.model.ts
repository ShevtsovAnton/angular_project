import { AuthorModel } from './author.model';

export interface CoursesItemModel {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    imagePath: string;
    topRated: boolean;
    authors: AuthorModel[];
}
