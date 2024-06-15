export class Company {
  id: number;
  name: string;
  fiscalNumber: number;

  constructor(id: number, name: string, fiscalNumber: number) {
    this.id = id;
    this.name = name;
    this.fiscalNumber = fiscalNumber;
  }
}
