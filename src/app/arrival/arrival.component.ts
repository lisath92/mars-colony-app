import { Component, OnInit } from '@angular/core';
import { Colonist, IOccupation } from '../models';
import { ColonistService } from '../shared/services/colonist-services';
import { OccupationService } from '../shared/services/occupation-services';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css'],
  providers: [OccupationService, ColonistService]

})
export class ArrivalComponent implements OnInit {

  NO_OCCUPATION_SELECTED = '(none)';

  public occupations: IOccupation[];
  public colonist: Colonist;

  constructor(
    private router: Router,
    private colonistService: ColonistService,
    private occupationService: OccupationService) 
  {
    this.colonist = new Colonist('', this.NO_OCCUPATION_SELECTED, '');
    occupationService.getOccupations().then(jobs =>this.occupations =jobs);
    
  }

    ngOnInit() {
    }

  }
