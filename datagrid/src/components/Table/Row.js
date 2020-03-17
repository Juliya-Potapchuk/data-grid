import React from 'react';

import './Table.css';
import '../../App.css';

function Row({
  id,
  name,
  registration_date,
  movie_genre,
  email,
  phone,
  is_active,
  getIdRowAction,
  idRow,
  visibleColumns
}) {

  const rowClick = (e) => {
    const clickRow = e.target.parentElement;
    const id = clickRow.id;
    const deleteAction = false;

    if (!e.ctrlKey || !e.shiftKey) {
      if (Boolean(idRow) === false) {
        clickRow.classList.toggle('active')
        idRow = { id: id }
        getIdRowAction(idRow, deleteAction);

      } else {
        if (+idRow.id === +id) {
          clickRow.classList.toggle('active')
          idRow = false;
          getIdRowAction(idRow, deleteAction);
        } else {
          (document.querySelectorAll('.active')).forEach(item => { item.classList.remove("active") });
          clickRow.classList.add('active');
          idRow = { id: id }
          getIdRowAction(idRow, deleteAction);
        }
      }

    } else {
      clickRow.classList.add('active');
      const idRow = document.querySelectorAll('.active');
      getIdRowAction(idRow, deleteAction);
    }
  }

  const visibleMovieGenreColumns = () => {
    if (visibleColumns.movie_genre === 'false') {
      return;
    }
    return <td className="centerAlign">{movie_genre}</td>
  }

  const visiblePhoneColumns = () => {
    if (visibleColumns.phone === 'false') {
      return;
    }
    return <td className="centerAlign">{phone}</td>
  }

  return (
    <tr id={id} key={id} onClick={(e) => rowClick(e)}>
      <td className="centerAlign">{id}</td>
      <td className="centerAlign">{
        (is_active === 'true') ? (<i className="fa fa-check" aria-hidden="true"></i>) : ('—')
      }</td>
      <td className="leftAlign">{name}</td>
      <td className="centerAlign">{registration_date}</td>
      {visibleMovieGenreColumns()}
      <td className="leftAlign">{email}</td>
      {visiblePhoneColumns()}
    </tr>
  )
}

export default Row;