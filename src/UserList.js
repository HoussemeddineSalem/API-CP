import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';



function UserList() {
    const [user, setUser] = useState([])
    useEffect(() =>
        axios.get('https://jsonplaceholder.typicode.com/users')

            .then(result => {
                console.log(result)
                setUser(result.data)
            })
            .catch(error => console.log('error is ', error)), []
    )


    return (
        <Carousel>

            {
                user.map(el =>
                    <Carousel.Item>

                        <Carousel.Caption>
                            <ul>
                                <li>{el.name}</li>
                                <li>{el.username}</li>
                                    <li>{el.email}</li>
                            </ul>

                        </Carousel.Caption>
                       
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt={el.name}
                            />
    
                       
                    </Carousel.Item>)
            }

        </Carousel>
    )
}

export default UserList;

