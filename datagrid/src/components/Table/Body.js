import React from 'react';
import Row from './Row';


function Body({ data, getIdRowAction, idRow, visibleColumns}) {

  const renderTableBody = () => data.map((element, index) => (
    <Row
      key={index}
      {...element}
      getIdRowAction={getIdRowAction}
      idRow={idRow}
      visibleColumns={visibleColumns}
    />
  ));

  return (
    <tbody>
      {renderTableBody()}
    </tbody>
  )
}

export default Body