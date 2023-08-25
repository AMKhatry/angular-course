import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  @ViewChild('cardRef1', {read: ElementRef}) 
  card1: CourseCardComponent;

  @ViewChild ('courseCardImage')
  courseCardImage: ElementRef;

  constructor(){

  }
  
  ngAfterViewInit() {
      console.log("courseCardImage",this.courseCardImage);

  }

  onCourseSelected(course:Course){


  }

}
