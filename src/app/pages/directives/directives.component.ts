import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  isVisible: boolean = true; // variable de tipo logica
  students: string[] = ['Miguel', 'Sofia', 'Catalina', 'Richard']; // es un arreglo de strings


  // students[0] = 'Miguel';
  // students[1] = 'Sofia';
  // students[2] = 'Catalina';
  // students[3] = 'Richard';

  // la logintud del arreglo "students" es 4

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }


  
}
