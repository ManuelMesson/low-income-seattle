import React from "react";

const ShowerCard = props => (
    <section>
        <h1>{props.name}</h1>
        <address>
            <p>{props.address}</p>
            <p>{props.phone}</p>
        </address>
        <b>Open: </b>{props.open}<br />
        <b>Info: </b>{props.info}
    </section>
)

export default ShowerCard;