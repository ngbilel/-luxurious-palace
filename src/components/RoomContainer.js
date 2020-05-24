import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomContainer({context}) {
    const {loading, rooms, sortedRooms, handelChange, filterRooms} = context;

    if(loading) return (<Loading/>);

    return (
        <>
         <RoomFilter rooms={rooms} handelChange={handelChange} filterRooms={filterRooms}/>
         <RoomList sortedRooms ={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer (RoomContainer);

/* import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {RoomConsumer} from '../context'


export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    console.log('value', value)
                    const {loading ,rooms, sortedRooms} = value;
                    if (loading) return <div> loading...</div>
                    if(rooms){
                        return (
                            <>
                                Hello from Container
                                <RoomFilter rooms={rooms}/>
                                <RoomList rooms={sortedRooms}/>   
                            </>
                        )
                    }  
                }
            }
        </RoomConsumer>   
    )
} */
