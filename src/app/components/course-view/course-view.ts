import { Component, Input } from '@angular/core';
import { Course } from '../../models/Course';

@Component({
  selector: 'course-view',
  imports: [],
  templateUrl: './course-view.html',
})
export class CourseView {
  @Input()course!:Course;
}
