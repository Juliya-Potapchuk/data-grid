export const deleteRow = (idRow, data) => {
    if (idRow.constructor === Object) {
        return data.filter(element => {
            return (+(element.id) === +(idRow.id)) ? false : true;
        })
    } else {
        const arrayIdRows = [];
        let newData = data;

        (document.querySelectorAll('.active')).forEach(item => {arrayIdRows.push(item.id)});

        const deleteEachElement = (newData, currentRow) => {
            return newData.filter(item => {
                return (+(item.id) === +currentRow) ? false : true;
            });
        };

        for (let i = 0; i < arrayIdRows.length; i++) {
            let resultDeleteEachElement = deleteEachElement(newData, arrayIdRows[i]);
            newData = resultDeleteEachElement
        }
        return newData;
    }
}