import React from 'react';
import './Main.css';
import Recipes from './recipes/Recipes';

class Main extends React.Component {
    state = {
        recipes: [
            {
                id: 1,
                showing: false,
                name: 'Spaghetti Bolognese',
                ingredients: ['pasta', 'minced beef', 'onion','capsicum','canned tomatoes','bolognese sauce']
            },
            {
                id: 2,
                showing: false,
                name: 'Thai Green Curry',
                ingredients: ['rice', 'potatoes', 'green curry paste', 'capsicum', 'beans']
            }
        ]
    }

    render(){
        return(
            <div className="main">
                <Recipes recipes={this.state.recipes}/>            
            </div>
        )
    }
}

export default Main;