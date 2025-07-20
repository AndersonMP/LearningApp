import { Component, Input } from '@angular/core';
import { Student } from '../../models/Student';
import { StudentItemView } from '../student-item/student-item';

@Component({
  selector: 'student-detail',
  imports: [StudentItemView],
  templateUrl: './student-detail.html',
})
export class StudentDetail {
  @Input()students!: Student[];
}
