import dataBody from '../data/dataBody';
import { enumFilter } from './enumFilter';
import { checkboxfilter } from './checkboxFilter';
import { searchFilter } from './searchFilter';

export const helperFilter = (
    direction,
    checkboxValue,
    enumValue,
    searchValue,
) => {
    let copyData = [...dataBody];

    const filter = (direction, checkboxValue, enumValue, searchValue) => {
        const filterDataEnum = (enumValue === null || enumValue.length === 0) ? copyData : enumFilter(copyData, enumValue);
        const filterDataId = (direction === 'asc') ? filterDataEnum : filterDataEnum.reverse();
        const filterDataCheckbox = checkboxfilter(filterDataId, checkboxValue);
        const filterDataSearch = searchFilter(filterDataCheckbox, searchValue);
          
        return filterDataSearch;
    };

    return (
        filter(direction, checkboxValue, enumValue, searchValue)
    )
}
