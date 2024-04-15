import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-student.component.html',
  styleUrl: './search-student.component.css'
})
export class SearchStudentComponent {
  number: string = '';
  subjects ?: any[];

  search() {
    fetch(`http://localhost:8000/api/students/${this.number}/schedule`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.subjects = data.data;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
