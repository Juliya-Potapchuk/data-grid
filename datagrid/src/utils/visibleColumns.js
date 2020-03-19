export const controlVisibleColumns = (data, visibleColumns) => {
    if (visibleColumns.movie_genre === 'false') {
        data.forEach((object) => {
            delete object.movie_genre;   
        })
    }
    if (visibleColumns.phone === 'false') {
        data.forEach((object) => {
            delete object.phone;
        })
    }
    return data;

}