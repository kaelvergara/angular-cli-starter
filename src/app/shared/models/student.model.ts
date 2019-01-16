import { School } from './school.model';

export class Student {
  public name: string;
  public age: number;
  public birthday: Date;
  public school: School;
  public subjects: string[];
  public metadata: any;
}
