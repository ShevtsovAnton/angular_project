import { Injectable } from '@angular/core';
import { CoursesItemModel } from '../models/courses-item.model';

@Injectable()
export class CoursesService {

  coursesList: CoursesItemModel[] = [
    {
      id: 1,
      title: 'Angular',
      creationDate: +new Date(2019, 10, 9),
      duration: 500,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imagePath: '../../../../assets/angular_new.png',
      topRated: true
    },
    {
      id: 2,
      title: 'React',
      creationDate: +new Date(2019, 11, 9),
      duration: 300,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imagePath: '../../../../assets/reactjs.png',
      topRated: false
    },
    {
      id: 3,
      title: 'Vue',
      creationDate: +new Date(2019, 7, 24),
      duration: 90,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imagePath: '../../../../assets/vuejs.jpg',
      topRated: false
    },
    {
      id: 4,
      title: 'Git',
      creationDate: +new Date(2019, 5, 30),
      duration: 54,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imagePath: '../../../../assets/git_new.png',
      topRated: false
    },
    {
      id: 5,
      title: 'Javascript',
      creationDate: +new Date(2019, 1, 18),
      duration: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imagePath: '../../../../assets/javascript.png',
      topRated: false
    },
    {
      id: 6,
      title: 'Jquery',
      creationDate: +new Date(2019, 2, 2),
      duration: 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imagePath: '../../../../assets/jquery_new.png',
      topRated: false
    },
    {
      id: 7,
      title: 'Ember.js',
      creationDate: +new Date(2019, 3, 3),
      duration: 333,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imagePath: '../../../../assets/ember.jpg',
      topRated: false
    },
    {
      id: 8,
      title: 'Express',
      creationDate: +new Date(2019, 4, 4),
      duration: 123,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imagePath: '../../../../assets/express_new.png',
      topRated: false
    },
    {
      id: 9,
      title: 'Node.js',
      creationDate: +new Date(2019, 5, 5),
      duration: 950,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imagePath: '../../../../assets/node_new.jpeg',
      topRated: false
    }
  ];

  getList(): CoursesItemModel[] {
    return this.coursesList;
  }

  createCourse(course: CoursesItemModel): void {
    this.coursesList = [...this.coursesList, course];
  }

  getCourse(id: number): CoursesItemModel {
    return this.coursesList.filter(course => course.id === id)[0];
  }

  updateCourse(updatedCourse: CoursesItemModel): void {
    this.coursesList.map((course, index) => {
      if (course.id === updatedCourse.id) {
        this.coursesList = [
          ...this.coursesList.slice(0, index),
          updatedCourse,
          ...this.coursesList.slice(index + 1)
        ];
      }
    });
  }

  updateCourse1(updatedCourse: CoursesItemModel): void {
    this.coursesList = this.coursesList.reduce((allCourses, course) => {
      if (course.id !== updatedCourse.id) {
        allCourses.push(course);
      } else {
        allCourses.push(updatedCourse);
      }
      return allCourses;
    }, []);
  }


  remove(courseToRemove: CoursesItemModel): void {
    this.coursesList = this.coursesList.reduce((allCourses, course) => {
      if (course.id !== courseToRemove.id) {
        allCourses.push(course);
      }
      return allCourses;
    }, []);
  }
}
