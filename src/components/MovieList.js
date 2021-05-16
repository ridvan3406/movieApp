///created with rfcp 

import React from 'react'
import PropTypes from 'prop-types'

function MovieList(props) {
    console.log('movieList props:',props.movies)

    const emptyMessage=<p>ooppps!!! movies could not found</p>

    const movieList=<div>Movie List...</div>


    return (
        <div>
            <h3>Movie List</h3>
            {props.movies.length === 0 ?emptyMessage:movieList}
        </div>
    )
}

MovieList.propTypes = {

}

export default MovieList

