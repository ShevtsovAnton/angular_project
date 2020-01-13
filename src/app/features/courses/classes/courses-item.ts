import { CoursesItemModel } from '../models/courses-item.model';

export class CoursesItem implements CoursesItemModel {
    constructor(
        public id = null,
        public title = '',
        public creationDate = null,
        public duration = null,
        public description = '',
        public imagePath = '',
        public topRated = false,
        public authors = []
    ) {}
}
