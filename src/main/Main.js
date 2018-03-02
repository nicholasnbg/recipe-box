import React from 'react';
import './Main.css';
import Recipes from './recipes/Recipes';
import Button from './Button';

class Main extends React.Component {
    state = {
        recipes: [
            {
                key: 0,
                showing: false,
                name: 'Spaghetti Bolognese',
                ingredients: ['pasta', 'minced beef', 'onion','capsicum','canned tomatoes','bolognese sauce']
            },
            {
                key: 1,
                showing: false,
                name: 'Thai Green Curry',
                ingredients: ['rice', 'potatoes', 'green curry paste', 'capsicum', 'beans']
            }
        ]
    }

    render(){
        return(
            <div className="main">
                <Recipes 
                recipes={this.state.recipes}
                />
                <div className="buttons">
                    <Button />
                </div>            
            </div>
        )
    }
}

export default Main;