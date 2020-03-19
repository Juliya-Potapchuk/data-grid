export const deleteRowFilter = (objForDeleteRow, data) => {
    const { historyDeleteRow} = objForDeleteRow;
    let newData = data;

  const deleteEachElement = (newData, currentRow) => {
        return newData.filter(item => {
            return (+(item.id) === +currentRow) ? false : true;
        });
    };
    
    for (let i = 0; i < historyDeleteRow.length; i++) {
        const resultDeleteEachElement = deleteEachElement(newData, historyDeleteRow[i]);
        newData = resultDeleteEachElement
    }

    return  newData;
}