import { Component } from '@angular/core';
import { IAlien, Encounter } from '../models';
import { AlienService } from '../shared/services/alien-services';
import { EncounterService } from '../shared/services/encounter-services'
import { Router } from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css']
})

export class ReportComponent {

  NO_ALIEN_SELECTED = '(none)';
  
  private errorMessage: string;
  public aliens: IAlien[];
  public encounter: Encounter;

  constructor(
    private router: Router,
    private encounterService: EncounterService,
    private alienService: AlienService
    )

  {
    this.errorMessage='';
    this.encounter = new Encounter(sessionStorage.getItem('colonist'), this.NO_ALIEN_SELECTED, '', '');
    alienService.getAliens().then(
      alienTypes => this.aliens=alienTypes);
  }

  onSubmit() {
    this.encounterService.addEncounters(
    {
      "encounter" : this.encounter
    })
    .then(encounter => {this.router.navigate(['/encounters'])
  }).catch(error => {
    this.errorMessage="Oops, something went wrong!";

  });
}
}
