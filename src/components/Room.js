import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
export default function Room (props) {

    const {name , images , price , slug} = props.room;
    
    return (
        <article className = 'room' >
            <div className='img-container'>
                <img src={images[0]} alt={name}/>
                <div className="price-top">
                    <h6> {price} </h6>
                    <p> per Night   </p>
                </div>
                <Link to={`/room/${slug}`} className='btn-primary room-link'>features</Link>
            </div>
            <p className="room-info">
                {name}
            </p>
        </article>
    )
}

Room.propTypes =  {
    room : PropTypes.shape({
        name : PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}