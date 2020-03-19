const NAME_COLUMNS = ["id", "is_active", "name", "registration_date", "movie_genre", "email", "phone"];

export function exportCsv(data, visibleColumnsObject) {
    const movieGenreColumn = visibleColumnsObject.movie_genre;
    const phoneColumn = visibleColumnsObject.phone;
    const visibleColumns = []
    const csvRow = [];

    const nameVisibleColumns = NAME_COLUMNS.filter((nameColumn) => {
        const valueForFilter = (nameColumn === 'movie_genre' && movieGenreColumn === 'false') ? false : true;
        const valueForFilter2 = (nameColumn === 'phone' && phoneColumn === 'false') ? false : true;
        return ((valueForFilter === false) || (valueForFilter2 === false)) ? false : true;
    })

    visibleColumns.push(nameVisibleColumns)

    if (movieGenreColumn === 'false' && phoneColumn === 'true') {
        for (let item = 0; item < data.length; item++) {
            visibleColumns.push([data[item].id, data[item].is_active, data[item].name, data[item].registration_date,
            data[item].email, data[item].phone])
        }
    } else if (phoneColumn === 'false' && movieGenreColumn === 'true') {
        for (let item = 0; item < data.length; item++) {
            visibleColumns.push([data[item].id, data[item].is_active, data[item].name, data[item].registration_date,
            data[item].movie_genre, data[item].email])
        }
    } else if (phoneColumn === 'true' && movieGenreColumn === 'true') {
        for (let item = 0; item < data.length; item++) {
            visibleColumns.push([data[item].id, data[item].is_active, data[item].name, data[item].registration_date,
            data[item].movie_genre, data[item].email, data[item].phone])
        }
    } else if (phoneColumn === 'false' && movieGenreColumn === 'false') {
        for (let item = 0; item < data.length; item++) {
            visibleColumns.push([data[item].id, data[item].is_active, data[item].name, data[item].registration_date,
            data[item].email])
        }
    }

    for (let i = 0; i < visibleColumns.length; ++i) {
        console.log('visibleColumns.length', visibleColumns.length)
        csvRow.push(visibleColumns[i].join(","))
    }

    const csvString = csvRow.join("%0A")
    const a = document.createElement('a')

    a.href = 'data:attachment/csv,' + csvString;
    console.log('csvString', csvString)
    console.log('csvString', csvString)
    a.target = "_Blank";
    a.download = "testifile.csv"
    document.body.appendChild(a)
    a.click()
}

