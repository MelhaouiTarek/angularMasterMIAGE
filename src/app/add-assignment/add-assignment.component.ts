import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
@Output() nouvelAssignment = new EventEmitter<Assignment>();
nomAssignment:string = "";
dateDeRendu?:Date = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.dateDeRendu);

    if(this.nomAssignment && this.dateDeRendu) {
      let newAssignment = new Assignment();

      newAssignment.nom = this.nomAssignment;
      newAssignment.dateDeRendu = this.dateDeRendu;
      newAssignment.rendu = false;

     // this.assignments.push(nouvelAssignment);
     this.nouvelAssignment.emit(newAssignment)
    }
  }

}
