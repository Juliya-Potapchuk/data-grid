import React from 'react';
import Row from './Row';


function Body({ data, getIdRowAction, objForDeleteRow, visibleColumns}) {

  const renderTableBody = () => data.map((element, index) => (
    <Row
      key={index}
      index={index}
      {...element}
      getIdRowAction={getIdRowAction}
      objForDeleteRow={objForDeleteRow}
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