import { AfterViewInit, Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import {Course} from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

 
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements AfterViewInit {

  @Input({required: true}) 
  course: Course;

  @Input() 
  cardIndex: number;

  @Output('courseSelected') 
  courseEmitter = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;

  ngAfterViewInit(){
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
