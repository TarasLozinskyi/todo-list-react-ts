export interface ITaskModel{
  id:number;
  text:string;
  isDelete:boolean;
  isEdit:boolean;
  isActive:boolean;
}

export const taskItems:ITaskModel[]= [
  {id: Date.now(), text:'Hello World', isEdit:false, isActive:false, isDelete:false}
]
