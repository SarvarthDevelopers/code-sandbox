

import React, { useContext, useState } from 'react';
import './home.css';
import Note from '../../component/notes';
import { Notes } from '../../component/data';
import { NoteType } from '../../component/notes-type';
import AddNote from '../../component/add-note/add-note';
import { ThemeContext } from '../../context/theme/theme';


function Home() {

  const [notes,setNotes]=useState(Notes);
  const theme=useContext(ThemeContext)

  const addNote=(note:NoteType)=>{
        setNotes([note,...notes])
  }
  
  
  const deleteNote=(id:string)=>{
        console.log("delete",id);
        const index =notes.findIndex(note=>note.id===id)
        let editedNotes=[...notes]
         editedNotes.splice(index,1)
         setNotes(editedNotes)
  }

  return (
    <div className={`Home ${theme}`}>
      <h1>Hi, I am a notes application</h1>
      <AddNote addNote={addNote} />
      <div>
        {
          notes.map(note=> 
            <Note key={note.id}
            id={note.id}
            text={note.text} priority={note.priority}
             
              deleteNote={deleteNote}
             />
          )
        }
      </div>
    </div>
  );
}

export default Home;

