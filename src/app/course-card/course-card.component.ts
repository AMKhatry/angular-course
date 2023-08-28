import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList } from '@angular/core';
import {Course} from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

 
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {

  @Input({required: true}) 
  course: Course;

  @Input() 
  cardIndex: number;

  @Output('courseSelected') 
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  image: QueryList<CourseImageComponent>;

  ngAfterViewInit(){
      
  }

  ngAfterContentInit(): void {
    console.log(this.image);
  }
  
  onCourseViewed(){
    this.courseEmitter.emit(this.course);
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  cardClasses(){

    if(this.course.category == 'BEGINNER'){
        return['beginner'];
    }   
  }

  cardStyles(){
      return{'text-decoration':'underline'};
      
  }

}
