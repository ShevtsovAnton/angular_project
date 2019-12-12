import { Component, OnInit } from '@angular/core';
import { CoursesItemModel } from '../../models/courses-item.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})

export class CoursesPageComponent implements OnInit {
  coursesList: CoursesItemModel[];

  ngOnInit() {
    this.coursesList = [
      {
        id: 1,
        title: 'Angular',
        creationDate: +new Date(2019, 6, 1),
        duration: '3h 34min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imagePath: '../../../../assets/angular_new.png'
      },
      {
        id: 2,
        title: 'React',
        creationDate: +new Date(2019, 8, 2),
        duration: '2h 32min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imagePath: '../../../../assets/reactjs.png'
      },
      {
        id: 3,
        title: 'Vue',
        creationDate: +new Date(2019, 7, 24),
        duration: '3h 34min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imagePath: '../../../../assets/vuejs.jpg'
      },
      {
        id: 4,
        title: 'Git',
        creationDate: +new Date(2019, 5, 30),
        duration: '54min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imagePath: '../../../../assets/git_new.png'
      },
      {
        id: 5,
        title: 'Javascript',
        creationDate: +new Date(2019, 1, 18),
        duration: '6h 30min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imagePath: '../../../../assets/javascript.png'
      },
      {
        id: 6,
        title: 'Jquery',
        creationDate: +new Date(2019, 2, 2),
        duration: '2h 10min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imagePath: '../../../../assets/jquery_new.png'
      },
      {
        id: 7,
        title: 'Ember.js',
        creationDate: +new Date(2019, 3, 3),
        duration: '5h 33min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imagePath: '../../../../assets/ember.jpg'
      },
      {
        id: 8,
        title: 'Express',
        creationDate: +new Date(2019, 4, 4),
        duration: '3h 34min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imagePath: '../../../../assets/express_new.png'
      },
      {
        id: 9,
        title: 'Node.js',
        creationDate: +new Date(2019, 5, 5),
        duration: '5h 55min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imagePath: '../../../../assets/node_new.jpeg'
      }
    ];
  }
}
