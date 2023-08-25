import { AfterViewInit, Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;



  constructor(){

  }
  
  ngAfterViewInit() {
 
  }

  onCourseSelected(course:Course){


  }

}
