import { CoursesItemModel } from '../../models/courses-item.model';

export const coursesListMock: CoursesItemModel[] = [
  {
    id: 1,
    title: 'Angular',
    creationDate: +new Date(2019, 10, 9),
    duration: 500,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: true
  },
  {
    id: 2,
    title: 'React',
    creationDate: +new Date(2019, 11, 9),
    duration: 300,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: false
  },
  {
    id: 3,
    title: 'Vue',
    creationDate: +new Date(2019, 7, 24),
    duration: 90,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: false
  },
  {
    id: 4,
    title: 'Git',
    creationDate: +new Date(2019, 5, 30),
    duration: 54,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: false
  },
  {
    id: 5,
    title: 'Javascript',
    creationDate: +new Date(2019, 1, 18),
    duration: 200,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: false
  },
  {
    id: 6,
    title: 'Jquery',
    creationDate: +new Date(2019, 2, 2),
    duration: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: false
  },
  {
    id: 7,
    title: 'Ember.js',
    creationDate: +new Date(2019, 3, 3),
    duration: 333,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: false
  },
  {
    id: 8,
    title: 'Express',
    creationDate: +new Date(2019, 4, 4),
    duration: 123,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: false
  },
  {
    id: 9,
    title: 'Node.js',
    creationDate: +new Date(2019, 5, 5),
    duration: 950,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imagePath: '',
    topRated: false
  }
];
