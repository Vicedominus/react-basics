import React from 'react';
import '../stylesheets/Testimonial.css';

function Testimonial(props) {
    return (
        <div className='testimonial-container'>
            <img className='testimonial-img' src={require(`../images/${props.image}-testimonial.png`)} alt='' />
            <div className='testimonial-text'>
                <p className='name'><strong>{props.name}</strong> en {props.country}</p>
                <p className='position'>{props.position} en <strong>{props.company}</strong></p>
                <p className='review'>"{props.review}"</p>
            </div>
        </div>
    );
}

export default Testimonial;
