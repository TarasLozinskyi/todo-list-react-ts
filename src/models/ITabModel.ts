export interface ITabModel{
  id:number;
  text:string;
  active:boolean;
}

export const tabItems: ITabModel[] = [
  {id: 0, text: 'All Tasks', active: true},
  {id: 1, text: 'Active', active: false},
  {id: 2, text: 'Completed', active: false},
]