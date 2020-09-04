import dataBody from '../data/dataBody';
import { enumFilter } from './enumFilter';
import { checkboxfilter } from './checkboxFilter';
import { searchFilter } from './searchFilter';
import { controlVisibleColumns } from './visibleColumns';
import { deleteRowFilter } from './deleteRow';

export const helperFilter = (
    direction,
    checkboxValue,
    enumValue,
    searchValue,
    visibleColumns,
    objForDeleteRow
) => {
    let copyData = JSON.parse(JSON.stringify(dataBody));

    const filter = (direction, checkboxValue, enumValue, searchValue, visibleColumns) => {
        const movieGenreColumn = visibleColumns.movie_genre;
        const phoneColumn = visibleColumns.phone;

        const filterDataVisibleColumns = (movieGenreColumn === 'true') && (phoneColumn === 'true') ?
            copyData : controlVisibleColumns(copyData, visibleColumns);

        const filterDataEnum = (enumValue === null || enumValue.length === 0 || movieGenreColumn === 'false') ?
            filterDataVisibleColumns : enumFilter(filterDataVisibleColumns, enumValue);

        const filterDataId = (direction === 'asc') ? filterDataEnum : filterDataEnum.reverse();
        const filterDataCheckbox = checkboxfilter(filterDataId, checkboxValue);
        const filterDataSearch = searchFilter(filterDataCheckbox, searchValue);

        const resultDeleteRow = objForDeleteRow.deleteAction ?
            deleteRowFilter(objForDeleteRow, filterDataSearch) : filterDataSearch;

        return resultDeleteRow;
    };

    return (
        filter(direction, checkboxValue, enumValue, searchValue, visibleColumns, objForDeleteRow)
    )
}
