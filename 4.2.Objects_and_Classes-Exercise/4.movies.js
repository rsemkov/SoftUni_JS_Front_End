function movies(data_input_array) {
    let movies_objects = []
    let final_result = []

    class Movie {
        constructor(name, director, date) {
            this.name = name
            this.director = director
            this.date = date
        }
    }

    for (item of data_input_array) {
        if (item.includes('addMovie')) {
            current_data = item.split('addMovie ')
            add_movie(current_data)
        } else if (item.includes('directedBy')) {
            current_data = item.split(' directedBy ')
            add_director(current_data)
        } else if (item.includes('onDate')) {
            current_data = item.split(' onDate ')
            add_date(current_data)
        }
    }

    function add_movie(data){
        let movie_title = data[1]
        let movie = new Movie(movie_title)
        movies_objects.push(movie)
    }

    function add_director(data){
        let movie_title = data[0]
        let movie_director = data[1]

        for (obj of movies_objects) {
            if (obj.name === movie_title) {
                obj.director = movie_director
            }
        }
        
    }

    function add_date(data){
        let movie_title = data[0]
        let movie_date = data[1]

        for (obj of movies_objects) {
            if (obj.name === movie_title) {
                obj.date = movie_date
            }
        }
        
    }

    for (object of movies_objects) {
        if (object.name != undefined && object.director != undefined && object.date != undefined) {
            final_result.push(JSON.stringify(object))
            
        }
    }

    final_result.forEach(a => console.log(a))

}


movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])
