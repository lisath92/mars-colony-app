import { Component } from '@angular/core';
import { AlienService } from './shared/services/alien-services';
import { OccupationService } from './shared/services/occupation-services';
import { EncounterService } from './shared/services/encounter-services';
import { Encounter } from './models';
import { ColonistService } from './shared/services/colonist-services';
import { Colonist } from './models';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ AlienService, OccupationService, 
  EncounterService, ColonistService],
  directives: [ROUTER_DIRECTIVES],

})
export class AppComponent {
  colonist: Colonist;
  encounter: Encounter;

  title = 'Mars Colony 1';
  constructor( alienService: AlienService, 
    occupationService: OccupationService,
    encounterService: EncounterService, 
    colonistService: ColonistService){

    console.log(alienService);
    console.log(occupationService);
    console.log(encounterService);

    this.encounter = new Encounter('557','Endomorph','eat eat eat','');
    encounterService.addEncounters({encounter: this.encounter})
    .then(encounter => {
      console.log(encounter);
    });

    this.colonist = new Colonist('Mark', '3', '45');

    colonistService.newColonist(this.colonist)
    .then(colonist => {
      console.log(colonist);
    });

  };
}
