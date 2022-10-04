import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card-img" alt=""/>
            <section className="card-text">
                <div className="location">
                    <div className="where">📌 {props.location}</div>
                    <a href={props.googleMapsUrl}><span className="map">View on Google Maps</span></a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.visitDate}</p>
                <p className="description">{props.description}</p>

            </section>
            {/* <hr className="hr" /> */}
        </div>
    )
}
