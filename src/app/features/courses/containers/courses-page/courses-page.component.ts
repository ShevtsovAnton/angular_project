import { Component, OnInit } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { CoursesItemModel } from '../../models/courses-item.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [LowerCasePipe]
})

export class CoursesPageComponent implements OnInit {
  coursesList: CoursesItemModel[];
  filteredCoursesList: CoursesItemModel[];
  noDataMessage = 'No Data, feel free to add new course';

  constructor(private lowerCase: LowerCasePipe) {}

  ngOnInit() {
    this.coursesList = [
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
    this.filteredCoursesList = [...this.coursesList];
  }

  private toLowerCase(item: string) {
    return this.lowerCase.transform(item);
  }

  delete(course: CoursesItemModel): void {
    console.log(`Parent 2: course ${course.title} with id ${course.id} must be deleted`);
  }

  search(searchQuery: string): void {
    const requestedTitle = this.toLowerCase(searchQuery.trim());
    if (!requestedTitle) {
      this.filteredCoursesList = [...this.coursesList];
      return;
    }

    const filteredList = this.coursesList.filter( course => {
      const title = this.toLowerCase(course.title.trim());
      return title.indexOf(requestedTitle) !== -1;
    });

    this.filteredCoursesList = [...filteredList];
  }
}
