export const ID_SORT = 'ID_SORT'
export const CHECKBOX_FILTER = 'CHECKBOX_FILTER'
export const ENUM_FILTER = 'ENUM_FILTER'
export const SEARCH_FILTER = 'SEARCH_FILTER'
export const DELETE_ROW = 'DELETE_ROW'
export const SET_VISIBLE_COLUMNS = 'SET_VISIBLE_COLUMNS'

export function sortId(direction) {
  return {
    type: ID_SORT,
    payload: { direction },
  }
}

export function getCheckboxValue(checkboxValue) {
  return {
    type: CHECKBOX_FILTER,
    payload: { checkboxValue },
  }
}

export function getEnumValue(enumValue) {
  return {
    type: ENUM_FILTER,
    payload: { enumValue },
  }
}

export function getSerchValue(searchValue) {
  return {
    type: SEARCH_FILTER,
    payload: { searchValue },
  }
}

export function getIdRow(idRow, deleteAction) {
  return {
    type: DELETE_ROW,
    payload: { idRow, deleteAction },
  }
}

  export function setVisibleColumns(visibleColumns) {
    return {
      type: SET_VISIBLE_COLUMNS,
      payload: { visibleColumns },
    }
  }