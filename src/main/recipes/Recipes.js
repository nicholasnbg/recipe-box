import React from 'react';
import './Recipes.css';
import RecipeListItem from './RecipeListItem';

class Recipes extends React.Component {

    render(){
        const recipes = this.props.recipes;
        console.log(recipes);
        return(
            <div className="recipes">
                <ul className="recipes">
                    {recipes.map(recipe => (
                        <RecipeListItem 
                        key={recipe.key} 
                        name={recipe.name} 
                        ingredients={recipe.ingredients}
                        showing={recipe.showing}
                        id={recipe.key} 
                        onRecipeClick={this.props.onRecipeClick}
                        />
                    ))}
                </ul>
            </div>
            
        )
    }
}

export default Recipes;