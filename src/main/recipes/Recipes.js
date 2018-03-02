import React from 'react';
import './Recipes.css';
import RecipeListItem from './RecipeListItem';

class Recipes extends React.Component {

    render(){
        const recipes = this.props.recipes;
        console.log(recipes);
        return(
            <ul className="recipes">
                {recipes.map(recipe => (
                    <RecipeListItem key={recipe.id} 
                    name={recipe.name} 
                    ingredients={recipe.ingredients}
                    showing={recipe.showing} />
                ))}
            </ul>
        )
    }
}

export default Recipes;