const FILTERABLE_COLUMNS = ['name', 'email']

export function searchFilter(data, searchValue) {
    if (!searchValue) {
        return data;
    }
    const loweredSearchValue = searchValue.toLowerCase()

    return data.filter(item => {
        const isIncludes = FILTERABLE_COLUMNS.some(
            (columnName) => {
                const valuerFromItem = item[columnName].toLowerCase()
                const isInclude = valuerFromItem.includes(loweredSearchValue)
                return isInclude
            }
        )
        return isIncludes
    })
};