import React from "react";

import deleteIcon from "assets/img/icons/common/delete.svg";

import "./Notepage.css";

let timer = 500,
  timeout;
function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    hrs = hrs < 10 ? "0" + hrs : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.toLocaleString('default', { day: '2-digit' });
    const month = monthNames[date.getMonth()];
    let year = date.toLocaleString('default', { year: 'numeric' });

    return `${hrs}:${min} ${day} ${month} ${year}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
