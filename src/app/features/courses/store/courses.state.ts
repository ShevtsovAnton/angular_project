import { CoursesItemModel } from '../models/courses-item.model';


export interface CoursesStateModel {
    list: CoursesItemModel[];
    selectedCourse: CoursesItemModel;
    allCoursesDisplayed: boolean;
}

export const initialCoursesState: CoursesStateModel = {
    list: [
        {
            id: null,
            title: null,
            creationDate: null,
            duration: null,
            description: null,
            imagePath: '../../../../assets/default.jpeg',
            topRated: false,
            authors: [
                {
                    id: '999',
                    name: ''
                }
            ]
        }
    ],
    selectedCourse: {
        id: null,
        title: null,
        creationDate: null,
        duration: null,
        description: null,
        imagePath: '../../../../assets/default.jpeg',
        topRated: false,
        authors: [
            {
                id: null,
                name: ''
            }
        ]
    },
    allCoursesDisplayed: false
};
