import React, { Component } from 'react';
import './tourlist.scss'
import Tour from '../Tour/Tour'
import { tourData } from '../../setup-files/tourData'

class TourList extends Component {
    state = {
        tour: tourData
    }

    removeTour = id => {
        const { tour } = this.state;
        const sortedTours = tour.filter(tour => tour.id !== id);
        this.setState({
            tour: sortedTours
        })
    }
    render() {
        const { tour } = this.state
        console.log(this.state.tour, "--test")
        return (
            <section className="tourlist">
             {
                 tour.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>))
             }
            </section>
          
        );
    }
}

export default TourList;
