
import React, {Component, useState} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

// css
import './_GridList.scss'
import MovieCard from '../MovieCard/MovieCard';



class GridList extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            response: {},
            page: 1,
            baseUrl: props.baseUrl,
            serachTitle: props.search || ""
        }
    }



    getMovies(title) {
        if (title !== undefined && this.state.serachTitle !== title) {
            this.state.page = 1;
            this.state.serachTitle = title;
        }       

        const requestUrl = `${this.state.baseUrl}&page=${this.state.page}&s=${this.state.serachTitle}`
        fetch(requestUrl)
            .then(response => response.json())
            .then(response_items => {
                this.setState({
                    response: response_items
                })
            })
    }

    renderMoveCard(props) {
        return (
            <MovieCard
                poster = {props.Poster}
                title = {props.Title}
                type = {props.Type}
                year = {props.Year}
                id = {props.imdbID}
                key={props.imdbID.toString()}
            />
        )
    }

    handlePageChange(event, value) {
        this.state.page = value;
        this.getMovies();
        this.scrollToTop();
    }

    scrollToTop() {
        window["scrollTo"]({
            top: 0,
            behavior: "smooth"
        })
    }

    render() {
        console.log(this.state.response)
        return (
            <Container className={`grid-list-container ${this.props.className}`}>
                {   
                    (
                        this.state.response.Response == "True" 
                        &&
                        this.state.response.Search
                    )
                    ?
                    (
                        (
                            <>
                                <Grid 
                                    container 
                                    spacing={3} 
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    className='grid-list-grid'
                                >
                                    {
                                        (this.state.response.Search || []).map((item, index) => (
                                            this.renderMoveCard(item)
                                        ))
                                    }
                                </Grid>
                                <Pagination 
                                    showFirstButton 
                                    showLastButton
                                    size="large"
                                    defaultPage={this.state.page}
                                    page={this.state.page}
                                    boundaryCount={2}
                                    count={
                                        Math.ceil(parseInt(this.state.response.totalResults) / 10.0)
                                    } 
                       
                                    onChange={(event, value)=>{
                                        this.state.page = value
                                        this.handlePageChange(event, value)
                                    }} 
                                /> 
                            </>
                        )
                    )
                    :
                    <div className='error-message'>
                        {this.state.response.Error}
                    </div>
                }   
                
            </Container> 
        )
    }
}

export default GridList