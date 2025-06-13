 export type Priority='high'|'mediam'|'low';
 
 
export type NoteType={
    id:string,
    text:string,
    // this is a union
    priority:Priority
}


export enum ColorLight{
high='rgb(245, 170, 130)',
mediam='rgb(234, 249, 135)',
low='rgb(75, 249, 162)'
}

export enum ColorDark{
high='rgb(140, 79, 46)',
mediam='rgb(130, 130, 5)',
low='rgb(2, 112, 68)'
}