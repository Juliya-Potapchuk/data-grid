import dataBody from '../data/dataBody';
import { ID_SORT } from '../actions/actions'
import { CHECKBOX_FILTER } from '../actions/actions'
import { ENUM_FILTER } from '../actions/actions'
import { SEARCH_FILTER } from '../actions/actions'
import { DELETE_ROW } from '../actions/actions'
import { SET_VISIBLE_COLUMNS } from '../actions/actions'

import { helperFilter } from '../utils/helper';
import { deleteRow } from '../utils/deleteRow';


const initialState = {
  data: dataBody,
  sortData: dataBody,
  direction: 'asc',
  checkboxValue: null,
  enumValue: null,
  searchValue: null,
  visibleColumns: {movie_genre: 'true', phone: 'true'}
}

export function sortReducer(state = initialState, action) {
  switch (action.type) {
    case ID_SORT:
      const { direction } = action.payload;
      const filterData1 = helperFilter(direction, state.checkboxValue, state.enumValue, state.searchValue);
      return { ...state, direction: direction, data: filterData1, sortData: filterData1 };

    case CHECKBOX_FILTER:
      const { checkboxValue } = action.payload;
      const filterData2 = helperFilter(state.direction, checkboxValue, state.enumValue, state.searchValue);
      return { ...state, checkboxValue: checkboxValue, data: filterData2, sortData: filterData2 };

    case ENUM_FILTER:
      const { enumValue } = action.payload;
      const filterData3 = helperFilter(state.direction, state.checkboxValue, enumValue, state.searchValue);
      return { ...state, enumValue: enumValue, data: filterData3, sortData: filterData3 };

    case SEARCH_FILTER:
      const { searchValue } = action.payload;
      const filterData4 = helperFilter(state.direction, state.checkboxValue, state.enumValue, searchValue);
      return { ...state, searchValue: searchValue, data: filterData4, sortData: filterData4 };

    case DELETE_ROW:
      let { idRow, deleteAction } = action.payload;
      const dataAfterDeleteRow =  deleteAction ? deleteRow(idRow, state.sortData) : state.sortData; 
      return { ...state, idRow: idRow, deleteAction: deleteAction, data: dataAfterDeleteRow, sortData: dataAfterDeleteRow };

      case SET_VISIBLE_COLUMNS:
      const { visibleColumns} = action.payload;
      return { ...state, visibleColumns: visibleColumns};

    default:
      return state
  }
}
