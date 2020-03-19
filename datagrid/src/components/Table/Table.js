import React from 'react';
import { connect } from 'react-redux';
import { HeaderTable } from './Header';
import { sortId, getCheckboxValue, getEnumValue, getSerchValue, getIdRow, setVisibleColumns } from '../../actions/actions';
import Body from './Body';
import SearchBlock from '../SearchBlock';

import './Table.css';
import '../../App.css';
import { exportCsv } from '../../utils/exportCsv';

const Table = ({
  sort,
  sortIdAction,
  getCheckboxValueAction,
  getEnumValueAction,
  getSerchValueAction,
  getIdRowAction,
  setVisibleColumnsAction
}) => {
  const { data, direction, objForDeleteRow, visibleColumns } = sort;


  const buttonDeleteRow = () => {
    let { singleClickRow, multipleClickRow, historyDeleteRow } = objForDeleteRow;

    objForDeleteRow.deleteAction = true;
    objForDeleteRow.singleClickRow = singleClickRow;
    objForDeleteRow.multipleClickRow = multipleClickRow;
    objForDeleteRow.historyDeleteRow = historyDeleteRow;
    
    let arrayRows = (multipleClickRow.length === 0) ? singleClickRow : multipleClickRow;

    arrayRows.forEach(id => {
      historyDeleteRow.push(id)
    });

    const calcLengthclassList = 1000 - historyDeleteRow.length;
    objForDeleteRow.classList = (new Array(calcLengthclassList)).fill('row-body-default', 0, calcLengthclassList);
    getIdRowAction(objForDeleteRow);
  }

  return (
    <>
      <SearchBlock
        getSerchValueAction={getSerchValueAction}
        getEnumValueAction={getEnumValueAction}
        getCheckboxValueAction={getCheckboxValueAction}
      />
      <div className="block-buttons">
        <button className="button-download" onClick={() => exportCsv(data, visibleColumns)}>
          <i className="fa fa-download" aria-hidden="true"></i>
          Download
        </button>
        <button className="button-delete-row" onClick={() => buttonDeleteRow()}>
          <i className="fa fa-trash" aria-hidden="true"></i>
          Delete row(s)
        </button>
      </div>
      <table className="table" >
        <HeaderTable
          direction={direction}
          sortIdAction={sortIdAction}
          setVisibleColumnsAction={setVisibleColumnsAction}
          visibleColumns={visibleColumns}
        />
        <Body
          data={data}
          getIdRowAction={getIdRowAction}
          objForDeleteRow={objForDeleteRow}
          visibleColumns={visibleColumns}
        />
      </table>
    </>
  )
}

const mapStateToProps = store => {
  return {
    sort: store.sort,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortIdAction: (direction) => dispatch(sortId(direction)),
    getCheckboxValueAction: (checkboxValue) => dispatch(getCheckboxValue(checkboxValue)),
    getEnumValueAction: (enumValue) => dispatch(getEnumValue(enumValue)),
    getSerchValueAction: (searchValue) => dispatch(getSerchValue(searchValue)),
    getIdRowAction: (idRow, deleteAction) => dispatch(getIdRow(idRow, deleteAction)),
    setVisibleColumnsAction: (visibleColumns) => dispatch(setVisibleColumns(visibleColumns)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
