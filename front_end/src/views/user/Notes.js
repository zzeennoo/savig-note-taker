import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "reactstrap";
import NoteContainer from "components/NoteContainer/NoteContainer";
import Sidebar from "components/Sidebar/Sidebar2";
import "./Notes.css";
import NotesHeader from "components/Headers/NotesHeader";

function Notes() {
  const [notes, setNotes] = useState([]);

  // Fetch notes from the backend when the component mounts
  useEffect(() => {
    async function fetchNotes() {
      try {
        // const response = await fetch('http://localhost:5000/api/notes');
        const response = await fetch('https://savig-project.vercel.app/api/notes');
        if (!response.ok) {
          throw new Error('Failed to fetch notes');
        }
        const notesData = await response.json();
        setNotes(notesData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNotes();
  }, []);

  const addNote = async (color) => {
    const newId = Date.now() + Math.floor(Math.random() * 1000);
    try {
      // const response = await fetch('http://localhost:5000/api/notes/new', {
        const response = await fetch('https://savig-project.vercel.app/api/notes/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: newId.toString(),
          time: Date.now(),
          text: "",
          color,
        }),
      });
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to add note');
      }
  
      setNotes([...notes, responseData]);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };
  
  const deleteNote = async (id) => {
    try {
      //const response = await fetch(`http://localhost:5000/api/notes/remove/${id}`, {
        const response = await fetch(`https://savig-project.vercel.app/api/notes/remove/${id}`, {
        method: 'DELETE',
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to add note');
      }
  
      const filteredNotes = notes.filter((note) => note.id !== id);
      setNotes(filteredNotes);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };
  
  const updateText = async (text, id) => {
    try {
      //const response = await fetch(`http://localhost:5000/api/notes/update/${id}`, {
        const response = await fetch(`https://savig-project.vercel.app/api/notes/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }), // Send the updated text as JSON
      });
  
      if (!response.ok) {
        throw new Error('Failed to update note');
      }
  
      // Update the notes array directly in the state
      setNotes(prevNotes =>
        prevNotes.map(note =>
          note.id === id ? { ...note, text } : note
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      <NotesHeader />
      <Container className="mt--9" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <div className="NotesCalendar">
                <Sidebar addNote={addNote}/>
                <NoteContainer
                  notes={notes}
                  deleteNote={deleteNote}
                  updateText={updateText}
                />
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Notes;
