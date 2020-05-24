import React, { Component } from 'react'
import  {RoomContext} from '../context'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    static contextType = RoomContext;
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug
        }
    }
    render() {  
        const  {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to='/rooms' className="btn-primary"> Back to Rooms</Link>
                   </div>
        }
        else {
        const {name, images, description, capacity, size, price, extras, breakfast, pets} = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <div>
               <StyledHero img={images[0]}>
                    <Banner title={`${name} room`} >
                        <Link to='/' className='btn-primary'>
                            BACK TO ROOMS
                        </Link>
                    </Banner>
               </StyledHero>
               <section className="single-room">
                    <div className="single-room-images">
                        {
                            defaultImg.map((image, index) => <img key={index} src={image} alt={name}/>)
                        }                       
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                    <p>{description}</p>
                        </article>
                        <article className="info">
                        <h3>Details</h3>
                            <h6>Price : ${price}</h6>
                            <h6>Size : {size} SQFT</h6>
                            <h6>Max Capacity :{capacity > 1 ? `${capacity} People` : `${capacity} person` } </h6>
                            <h6>Pets { pets ? 'Allowed' : 'not Allowed '}</h6>
                            <h6>{ breakfast && 'Free Breakfast Included' }</h6>
                        </article>
                    </div>
               </section>
               <section className="room-extras">
                    <h6>Extrats</h6>
                    <ul className="extras">
                        {
                           extras && extras.map((extra, index)=> <li key={index}>- {extra}</li>)
                        }
                    </ul>
               </section>
            </div>
        )
     }
    }
}
