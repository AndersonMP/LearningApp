import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course';
import { CourseView } from "../course-view/course-view";
import { StudentDetail } from '../student-detail/student-detail';
import { StudentItemView } from '../student-item/student-item';

@Component({
  selector: 'app-learning',
  imports: [CourseView, StudentDetail],
  templateUrl: './learning.html',
  styleUrl: './learning.css'
})
export class LearningComponent implements OnInit {
  course!: Course;
  constructor(private service: CourseService) { };

  ngOnInit(): void {
    this.course = this.service.getCourse();
  }

}
