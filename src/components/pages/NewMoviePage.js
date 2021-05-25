import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewMovieForm from '../NewMovieForm'


export class NewMoviePage extends Component {
    render() {
        return (
            <div>
                add new movie Page
                <NewMovieForm/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage)
