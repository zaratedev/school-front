import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-subject',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-subject.component.html',
  styleUrl: './search-subject.component.css'
})
export class SearchSubjectComponent {
  code: string = '';
  name: string = '';
  classroom: string = '';
  day: string = '';
  schedule: string = '';
  query: string = '';
  teachers: any[] = [];

  search() {
    fetch(`http://localhost:8000/api/subjects/${this.query}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.data);
      this.code = data.data.code;
      this.name = data.data.name;
      this.classroom = data.data.classroom;
      this.day = data.data.day;
      this.schedule = data.data.schedule;
      this.teachers = data.data.teachers;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
