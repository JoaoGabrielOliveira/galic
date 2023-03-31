import React, { Fragment } from "react";
import Card from 'components/Card';
import Hero from 'components/Hero';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {moviesList: [
            {id: 1, width: "500px", height: "250px", chipText:"#1 Trending 🔥"}
        ]};
    }

    getMovieCards(){
        return this.state.moviesList.map(movieData => {
            return <Card key={movieData.id} width={movieData.width} height={movieData.height} chipText={movieData.chipText}  />
        });
    }

    render(){
        return <Fragment>
            <Hero height="250px" background="https://wallpapercave.com/wp/wp7107842.jpg" noBorder>
            <header>
                + 2 friends are watching
            </header>
            
            <main>
                The Outsider
            </main>
            
            <footer>
                <button>
                Watch Now
                </button>
            </footer>
            </Hero>

            <div className='list'>
                {this.getMovieCards()}
            </div>
        
         </Fragment>
    }

}