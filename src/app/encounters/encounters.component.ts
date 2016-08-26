import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models';
import { EncounterService } from '../shared/services/encounter-services';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css']
})
export class EncountersComponent {

    public encounters: Encounter[];

  constructor(
    private encounterService: EncounterService) { 
     encounterService.getEncounters().then(
       encounterReports=>this.encounters=encounterReports);
  }
}
