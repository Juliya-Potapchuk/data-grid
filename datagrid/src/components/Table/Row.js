import React from 'react';
import './Table.css';
import '../../App.css';

function Row({
  index,
  id,
  name,
  registration_date,
  movie_genre,
  email,
  phone,
  is_active,
  getIdRowAction,
  objForDeleteRow,
  visibleColumns
}) {

  const rowClick = (event, index) => {
    let { classList, singleClickRow, multipleClickRow, historyDeleteRow } = objForDeleteRow;
    const id = event.target.parentElement.id;
    objForDeleteRow.deleteAction = false;
    objForDeleteRow.historyDeleteRow = historyDeleteRow;

    if (!event.ctrlKey) {

      if (singleClickRow[0] === id) {
        classList[index] = (classList[index] === 'row-body-default') ? 'row-body-active' : 'row-body-default';

        if (multipleClickRow.length !== 0) {
          multipleClickRow.forEach((elementId) => {
            const indexMultipleClickRow = elementId - 1 - historyDeleteRow.length;
            classList.forEach(element => {
              classList[indexMultipleClickRow] = 'row-body-default'
            });
          });
        }
        objForDeleteRow.multipleClickRow = []
      } else {
        classList.fill('row-body-default');
        singleClickRow[0] = id;
        classList[index] = 'row-body-active';
        objForDeleteRow.multipleClickRow = []
      }

    } else {
      classList[singleClickRow[0] - 1 - historyDeleteRow.length] = 'row-body-default';
      multipleClickRow.push(id);
      classList[index] = 'row-body-active';
    }
    getIdRowAction(objForDeleteRow);
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
    <tr
      id={id}
      key={id}
      className={`${objForDeleteRow.classList[index]}`}
      onClick={(event) => rowClick(event, index)}
    >
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