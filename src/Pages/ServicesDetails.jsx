import React from 'react';

const ServicesDetails = (props) => {
    return (
        <div>
            <h1>Services Details: {props.match.params.id}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, earum aliquid! Numquam, saepe. Est beatae at debitis dolor nobis totam!</p>
        </div>
    );
}

export default ServicesDetails;
