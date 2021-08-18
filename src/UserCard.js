import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserCard({ name, username, email }) {
    return (


        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
            />
            <Carousel.Caption>
                <ul>
                    <li>{name}</li>
                    <li>{username}</li>
                    <li>{email}</li>
                </ul>
            </Carousel.Caption>
        </Carousel.Item>
    

    )
}

export default UserCard
