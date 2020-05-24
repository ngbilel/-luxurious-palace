import React from 'react';
import {RoomContext} from '../context';
import Title from './Title';
import Room from './Room';

export default class FeaturedRooms extends React.Component {
    static  contextType = RoomContext;

    render(){
        const {loading, featuredRooms} = this.context;
        return (
        <section className="featured-rooms"> 
             <Title title="Featured Rooms" />
            <div className="featured-rooms-center">      
                {!loading && featuredRooms.map(featuredRoom =><Room room={featuredRoom} />)} 
            </div>
        </section>
        )
    }
}