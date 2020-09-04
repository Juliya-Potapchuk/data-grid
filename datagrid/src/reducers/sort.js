import dataBody from '../data/dataBody';
import { ID_SORT } from '../actions/actions'
import { CHECKBOX_FILTER } from '../actions/actions'
import { ENUM_FILTER } from '../actions/actions'
import { SEARCH_FILTER } from '../actions/actions'
import { DELETE_ROW } from '../actions/actions'
import { SET_VISIBLE_COLUMNS } from '../actions/actions'

import { helperFilter } from '../utils/helper';

const initialState = {
  data: dataBody,
  direction: 'asc',
  checkboxValue: null,
  enumValue: null,
  searchValue: null,
  visibleColumns: { movie_genre: 'true', phone: 'true' },
  objForDeleteRow: {
    deleteAction: false,
    classList: (new Array(1000)).fill('row-body-default', 0, 1000),
    singleClickRow: [],
    multipleClickRow: [],
    historyDeleteRow: []
  }
}

export function sortReducer(state = initialState, action) {
  switch (action.type) {
    case ID_SORT:
      const { direction } = action.payload;
      const filterData1 = helperFilter(direction, state.checkboxValue, state.enumValue, state.searchValue, state.visibleColumns, state.objForDeleteRow);
      return { ...state, direction: direction, data: filterData1 };

    case CHECKBOX_FILTER:
      const { checkboxValue } = action.payload;
      const filterData2 = helperFilter(state.direction, checkboxValue, state.enumValue, state.searchValue, state.visibleColumns, state.objForDeleteRow);
      return { ...state, checkboxValue: checkboxValue, data: filterData2 };

    case ENUM_FILTER:
      const { enumValue } = action.payload;
      const filterData3 = helperFilter(state.direction, state.checkboxValue, enumValue, state.searchValue, state.visibleColumns, state.objForDeleteRow);
      return { ...state, enumValue: enumValue, data: filterData3 };

    case SEARCH_FILTER:
      const { searchValue } = action.payload;
      const filterData4 = helperFilter(state.direction, state.checkboxValue, state.enumValue, searchValue, state.visibleColumns, state.objForDeleteRow);
      return { ...state, searchValue: searchValue, data: filterData4 };

    case DELETE_ROW:
      const { objForDeleteRow } = action.payload;
      const { deleteAction } = objForDeleteRow;
      const filterData5 = !deleteAction ? state.data : helperFilter(state.direction, state.checkboxValue, state.enumValue, state.searchValue, state.visibleColumns, objForDeleteRow);
      return { ...state, objForDeleteRow: objForDeleteRow, data: filterData5 };

    case SET_VISIBLE_COLUMNS:
      const { visibleColumns } = action.payload;
      const filterData6 = helperFilter(state.direction, state.checkboxValue, state.enumValue, state.searchValue,
        visibleColumns, state.objForDeleteRow);
      return { ...state, visibleColumns: visibleColumns, data: filterData6 };

    default:
      return state
  }
}
