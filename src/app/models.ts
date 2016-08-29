export interface IAlien{
  type: string;
  description: string;
  submittedBy: string;
}

export class Colonist{
  constructor(
    public name: string,
    public job_id: string,
    public age: string,
    public id: string
  ){}
}

export interface IOccupation{
  name: string;
  description: string;
}

export class Encounter{
  constructor(public colonist_id: string,
              public atype: string,
              public action: string,
              private date: string){

    this.date = this.formatDate;
    }

    get formatDate(): string {
      let date = new Date();
      return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  }
}

export interface IPosts {
  title: Object;
  content: Object;
}
