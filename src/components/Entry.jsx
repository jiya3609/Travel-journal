export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img}
                    alt="picture of the place" 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-map-location-marker-icon-in-red-png-image_5004115.jpg" 
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.map_link}>View on Google Maps</a>
                <h2 className="entry-title">{props.place}</h2>
                <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry-text">{props.info}</p>
            </div>
            
        </article>
    )
}