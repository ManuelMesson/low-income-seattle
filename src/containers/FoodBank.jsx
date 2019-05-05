import React, { Component } from 'react';
import Card from '../components/Card';
import { FOOD_BANK } from '../constants/FoodBanks';
class FoodBank extends Component {


    render = () => {
        const items = FOOD_BANK;
        return (
            <section>
                <h1>List of Seattle Food Banks</h1>
                <Card>

                </Card>
            </section>
        )
    }
}

export default FoodBank;