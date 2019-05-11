import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ShowerCard = props => (
    <section>
        <Card>
            <CardContent>
            <h1>{props.name}</h1>
        <address>
            <p>{props.address}</p>
            <p>{props.phone}</p>
        </address>
        <b>Open: </b>{props.open}<br />
        <b>Info: </b>{props.info}
            </CardContent>
        </Card>
    </section>
)

export default ShowerCard;