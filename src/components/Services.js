import React from 'react'
import Title from './Title'
import {FaHiking} from 'react-icons/fa'

 export default class Services extends React.Component {
    state = {
        services:[
            {
                icon : <FaHiking/>, 
                title: ' service 1',
                info: 'lorem esmpn telsma mensap lorem esmpn telsma mensaplorem esmpn telsma mensaplorem esmpn telsma mensap',
            },
            {
                icon : <FaHiking/>, 
                title: ' service 2',
                info: 'lorem esmpn telsma mensap lorem esmpn telsma mensaplorem esmpn telsma mensaplorem esmpn telsma mensap',
            },
            {
                icon : <FaHiking/>, 
                title: ' service 3',
                info: 'lorem esmpn telsma mensap lorem esmpn telsma mensaplorem esmpn telsma mensaplorem esmpn telsma mensap',
            },
            {
                icon : <FaHiking/>, 
                title: ' service 4',
                info: 'lorem esmpn telsma mensap lorem esmpn telsma mensaplorem esmpn telsma mensaplorem esmpn telsma mensap',
            }
        ]
    }
    render() {
        return (
            <div className="services">
                <Title title="services"></Title>
                <div></div>
                <div className="services-center">{
                     this.state.services.map((item, index) => (                       
                        <article key={index} className="service">
                             <span>{item.icon}</span>
                             <h4>{item.title}</h4>
                             <p>{item.info}</p>
                         </article>
                     ))      
                }  
                </div>
            </div>
        )
    }
 }
