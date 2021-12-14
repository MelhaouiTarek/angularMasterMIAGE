import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Liste des assignments";
  couleur = "violet";
  // pour cacher le formulaire
  forVisible=false;
  assignmentSelectionne?:Assignment = undefined;

  assignments:Assignment[] = [
    {
      nom:"Devoir Angular proposé par Mr Buffa",
      dateDeRendu: new Date("2022-01-23"),
      rendu : false
    },
    {
      nom:"Devoir gestion de projet de Mr Winter",
      dateDeRendu: new Date("2022-01-10"),
      rendu : false
    },
    {
      nom:"Devoir Hybride de Mr Pascal Bohn",
      dateDeRendu: new Date("2021-11-01"),
      rendu : true
    }
  ]
  constructor() { }

  ngOnInit(): void {
    // appelé AVANT l'affichage (juste après le constructeur)
    console.log("AVANT AFFICHAGE");
  }

  assignmentClique(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
  }
  onAddAssignment()
  {
    this.forVisible = true;
  }
 
  onNewAssignment ( assignment:Assignment)
{
  this.assignments.push(assignment);
}
}
