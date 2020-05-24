import React from 'react'
import Title from '../components/Title'
import { useContext } from 'react'
import  { RoomContext } from '../context'

const getUnique = (items, value) => {
    return  [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter() {
     const context = useContext(RoomContext);
     const {
         rooms, 
         handelChange,
         type,
         capacity,
         price,
         minPrice,
         maxPrice,
         minSize,
         maxSize,
         breakfast,
         pets
        } = context;
        
    let types = getUnique(rooms, "type");

    types = ['All', ...types]

    types = types.map((type, index) => <option value={type} key={index}>{type}</option>);

    return (
        <section className="filter-container">
            <Title title="Search Rooms"></Title>
            <div/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={(e)=>handelChange(e)}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                <label htmlFor="capacity">Guest</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={(e)=>handelChange(e)}>
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                        <option value='4'> 4 </option>
                        <option value='5'> 5</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <label htmlFor="price">Price ${price} </label>
                        <div className="size-inputs">
                            <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} className="form-control"  onChange={(e)=>handelChange(e)}></input>             
                        </div>
                    </div>      
                </div>     
                <div className="form-group">
                    <div className="single-extra">
                        <label htmlFor="roomSize">Room Size</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" id="minSize" value={minSize} className="size-input"  onChange={(e)=>handelChange(e)}></input>             
                            <input type="maxSize" name="maxSize" id="maxSize" value={maxSize} className="size-input" onChange={(e)=>handelChange(e)}></input>
                        </div>
                    </div>      
                </div>     
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" value={breakfast}  onChange={(e)=>handelChange(e)}></input>
                        <label htmlFor="breakfast">breakfast</label>
                        <div className="single-extra">               
                        <input type="checkbox" name="pets" id="pets" value={pets}  onChange={(e)=>handelChange(e)}></input>
                        <label htmlFor="pets">pets</label>
                    </div>
                    </div>       
                </div>         
            </form>
           
        </section>
    )
}
