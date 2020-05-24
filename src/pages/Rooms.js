import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero'
import RoomContainer from '../components/RoomContainer'

const Rooms = () => {

    return (
        <>
        <StyledHero>
            <Banner title="Our Rooms">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </StyledHero>
        <RoomContainer/>
        </>
    )
}
export default Rooms;
