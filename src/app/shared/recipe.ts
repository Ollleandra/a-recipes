export class Recipe{
  name: string;
  recDesc: string;
  recText: string;
  editing: boolean;

  constructor(name: string = "", recDesc: string = "", recText: string = "", editing: boolean= false) {
    this.name = name;
    this.recDesc = recDesc;
    this.recText = recText;
    this.editing = editing;
  }
}
