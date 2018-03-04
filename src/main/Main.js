import React from 'react';
import './Main.css';
import Recipes from './recipes/Recipes';
import Button from './Button';
import AddRecipeForm from './AddRecipeForm';

class Main extends React.Component {
    constructor(){
        super();
        this.addRecipe = this.addRecipe.bind(this);

        this.state = {
            recipes: {
                recipe1: {
                    showing: false,
                    name: 'Spaghetti Bolognese',
                    ingredients: ['pasta', 'minced beef', 'onion','capsicum','canned tomatoes','bolognese sauce']
                },
                recipe2: {
                    showing: false,
                    name: 'Thai Green Curry',
                    ingredients: ['rice', 'potatoes', 'green curry paste', 'capsicum', 'beans']
                }
            }
        }
    }


    addRecipe(recipe) {
        const recipes = {...this.state.recipes};
        const timestamp = Date.now();
        recipes[`recipe-${timestamp}`] = recipe;
        this.setState({recipes});
    }

    render(){
        console.log(`state:`);
        console.log(this.state);
        return(
            <div className="main">
            <AddRecipeForm addRecipe={this.addRecipe} />
                <Recipes 
                recipes={this.state.recipes}
                />        
            </div>
        )
    }
}

export default Main;