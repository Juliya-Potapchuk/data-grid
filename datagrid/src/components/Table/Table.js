import React from 'react';
import { connect } from 'react-redux';
import { HeaderTable } from './Header';
import { sortId, getCheckboxValue, getEnumValue, getSerchValue, getIdRow, setVisibleColumns } from '../../actions/actions';
import Body from './Body';
import SearchBlock from '../SearchBlock';

import './Table.css';
import '../../App.css';


const Table = ({
  sort,
  sortIdAction,
  getCheckboxValueAction,
  getEnumValueAction,
  getSerchValueAction,
  getIdRowAction,
  setVisibleColumnsAction
}) => {
  const { data, direction, idRow, visibleColumns} = sort;

  const buttonDeleteRow = () => {
    const deleteAction = true;
    getIdRowAction(idRow, deleteAction)
  }

  return (
    <>
      <SearchBlock
        getSerchValueAction={getSerchValueAction}
        getEnumValueAction={getEnumValueAction}
        getCheckboxValueAction={getCheckboxValueAction}
      />
      <div className="block-button-delete">
        <button className="button-delete-row" onClick={() => buttonDeleteRow()}>Delete row(s)</button>
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
          idRow={idRow}
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
