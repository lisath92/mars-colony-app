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

  title = 'Mars Colony 1';
  
}
