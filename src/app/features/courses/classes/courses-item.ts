import { CoursesItemModel } from '../models/courses-item.model';

export class CoursesItem implements CoursesItemModel {
    constructor(
        public id = null,
        public title = '',
        public creationDate = null,
        public duration = '',
        public description = '',
        public imagePath = ''
    ) {}
}
