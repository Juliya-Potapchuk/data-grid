const BOOLEAN_VALUE = 'is_active'

export function checkboxfilter(data, checkboxValue) {
    if (checkboxValue !== null) {
        return data.filter(item => {
            const valuerFromItem = item[BOOLEAN_VALUE]
            return valuerFromItem === checkboxValue.toString()
        })
    }
    return data;
}