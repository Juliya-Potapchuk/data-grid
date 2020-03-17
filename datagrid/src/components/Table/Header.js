import React from 'react'
import dataHeader from '../../data/dataHeader';
import '../Table/Table.css';
import '../../App.css';

export function HeaderTable({ sortIdAction, direction, setVisibleColumnsAction, visibleColumns }) {
  const IdClick = () => {
    const calcDirection = (direction === 'asc') ? 'desc' : 'asc';
    sortIdAction(calcDirection);
  }

  const movieGenreClick = () => {
    const calcVisibleColumnsMovie = (visibleColumns.movie_genre === 'true') ? 'false' : 'true';
    visibleColumns = { movie_genre: calcVisibleColumnsMovie, phone: visibleColumns.phone }
    setVisibleColumnsAction(visibleColumns)
  }

  const phoneClick = () => {
    const calcVisibleColumnsPhone = (visibleColumns.phone === 'true') ? 'false' : 'true';
    visibleColumns = { movie_genre: visibleColumns.movie_genre, phone: calcVisibleColumnsPhone }
    setVisibleColumnsAction(visibleColumns)
  }

  const visibleMovieGenreColumns = () => {
    if (visibleColumns.movie_genre === 'false') {
      return;
    }
    return <th key={4} className="header header-movie">{dataHeader[4]}</th>
  }

  const visiblePhoneColumns = () => {
    if (visibleColumns.phone === 'false') {
      return;
    }
    return <th key={6} className="header header-phone">{dataHeader[6]}</th>
  }

  return (
    <thead>
      <tr>
        <th key={0} className="header header-id">
          {dataHeader[0]}
          <i className="fa fa-sort" aria-hidden="true" onClick={() => IdClick()}></i>
        </th>
        <th key={1} className="header header-active">
          {dataHeader[1]}
        </th>
        <th key={2} className="header header-name">
          {dataHeader[2]}
        </th>
        <th key={3} className="header header-date">
          {dataHeader[3]}
          <i className="fa fa-bars" aria-hidden="true" onClick={() => movieGenreClick()}></i>
        </th>
        {visibleMovieGenreColumns()}
        <th key={5} className="header header-email">
          {dataHeader[5]}
          <i className="fa fa-bars" aria-hidden="true" onClick={() => phoneClick()}></i>
        </th>
        {visiblePhoneColumns()}
      </tr>
    </thead>
  )

}
