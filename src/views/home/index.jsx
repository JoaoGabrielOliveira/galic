import React, { Fragment } from "react";
import Card from 'components/Card';
import Hero from 'components/Hero';
import 'views/home/index.css';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {moviesList: [
            {id: 1, title: "Spiderman - No way home", subtitle:"Dec 13", chipText:"#1 Trending 🔥", time:"02:28:05", background:"r74159lipa881.webp"},
            {id: 2, title: "Spiderman - No way home", subtitle:"Dec 13", time:"02:28:05", background:"r74159lipa881.webp"}
        ]};
    }

    getMovieCards(){
        return this.state.moviesList.map(movieData => {
            return <Card title={movieData.title} subtitle={movieData.subtitle} key={movieData.id} width={movieData.width} height={movieData.height} chipText={movieData.chipText} time={movieData.time} background={movieData.background} />
        });
    }

    render(){
        return <div className="grid">
            <div className="column">
                <h3>New Trailers</h3>

                
            </div>

            <div className="column">
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
            </div>
        
         </div>
    }

}