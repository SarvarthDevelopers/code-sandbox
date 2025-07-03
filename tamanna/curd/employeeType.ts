export interface Iemployee{
    id:string;
    fristName:string;
    lastName:string;
    email:string;
}

 export const dummyEmployeeList: Iemployee[]=[
    {
        id:new Date().toJSON().toString(),
        fristName:"dummy1",
        lastName:"gggg",
        email:"dummay@gmail.com"
    }
]

export enum pageEnum{
    list,
    add,
    edit
}