const ID_OBJECT = 'id';
const ENUM_COLUMN = 'movie_genre'

export const enumFilter = (data, enumValue) => {
    let dataWithSearchElements = [];
    const searchEachElement = (enumValueCurrent) => {
        const loweredSearchValue = enumValueCurrent.value.toLowerCase();
        return data.filter(item => {
            const valuerFromItem = item[ENUM_COLUMN].toLowerCase();
            const isInclude = valuerFromItem.includes(loweredSearchValue);
            return isInclude;
        });
    };

    for (let i = 0; i < enumValue.length; i++) {
        const resultSearchEachElement = searchEachElement(enumValue[i]);
        dataWithSearchElements = dataWithSearchElements.concat(resultSearchEachElement);
    }

    return dataWithSearchElements.sort((objCurrent, objNext) => {
        return objCurrent[ID_OBJECT] - objNext[ID_OBJECT];
    })

}




