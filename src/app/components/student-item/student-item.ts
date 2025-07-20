import { Component, Input } from '@angular/core';
import { Student } from '../../models/Student';

@Component({
  selector: 'tr [student-item]',
  standalone: true,
  templateUrl: './student-item.html',
})
export class StudentItemView {
  @Input()item!: Student;
}
