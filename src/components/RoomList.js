import React from 'react'
import Room from '../components/Room'

export default function RoomList({sortedRooms}) {
    if(sortedRooms.length === 0){
            return (
            <div className="empty-search"> 
                <h3>Unfortunately no rooms matched your search
                </h3>
            </div> )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                   sortedRooms && sortedRooms.map(
                        room => <Room key={room.id} room={room}/>
                    )
                }
            </div>
        </section>
    )
}
