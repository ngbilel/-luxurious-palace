import React  from 'react'
// import items from './data'
import Client from './contentful'



const RoomContext = React.createContext();

class RoomProvider extends React.Component {

   constructor(props){
       super(props);
       this.state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type:'all',
        capacity: 1,
        price: 600,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    }
   }

    getData = async () => {
        try {

            let response = await Client.getEntries({
                content_type: "hotelRooms"
            });
            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(
                item => item.price
            ));
            let maxSize = Math.max(...rooms.map(
                item => item.size
            ));
            this.setState({rooms, featuredRooms, sortedRooms: rooms, loading: false, maxPrice, maxSize});

        } catch(error){
            console.log('error', error);
        }
    }

    componentDidMount = () => {
       this.getData();
    }

    formatData = (items) => {
        let rooms = items.map( item => {
           let id = item.sys.id;
           let images = item.fields.images.map(
               image =>  image.fields.file.url
           );
           let room = {...item.fields, id, images};
           return room;        
        });
        return rooms;
    }

    getRoom =(slug)=>{
         const rooms = [...this.state.rooms]
         return  rooms.find(room => room.slug === slug); 
    }

    handelChange =(e)=>{
        const { name, type, value, checked } = e.target;
        this.setState({
            [name]: type !== 'checkbox' ?  value : checked,
        }, this.filterRooms);
    }

    filterRooms = () =>{
       const {rooms, type, capacity, pets, breakfast, price, maxSize, minSize} = this.state;
       
        let sortedRooms = type === 'all' ? rooms : rooms.filter(room => room.type === type );
            sortedRooms = pets ? sortedRooms.filter(room => room.pets === pets) : sortedRooms;
            sortedRooms = breakfast ? sortedRooms.filter(room => room.breakfast === breakfast ) : sortedRooms;
            sortedRooms = capacity ? sortedRooms.filter(room =>room.capacity >= capacity) : sortedRooms;
            sortedRooms = price ? sortedRooms.filter(room => room.price <= price) : sortedRooms;
            sortedRooms = minSize && maxSize ? sortedRooms.filter(room => room.size >= minSize && room.size <= maxSize) : sortedRooms;  
        
        this.setState({
            sortedRooms, 
        })
    }
    
    render(){
        return(
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handelChange: this.handelChange, filterRooms:this.filterRooms}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </RoomConsumer>
    }
}

export {RoomContext, RoomProvider, RoomConsumer};