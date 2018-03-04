import React from 'react';
import './Recipes.css';
import RecipeListItem from './RecipeListItem';

class Recipes extends React.Component {

    renderRecipe = key =>{
        const recipe = this.props.recipes[key];
        return (
            <div className="recipeListItemContainer" key={key}>
                <RecipeListItem 
                name={recipe.name} 
                ingredients={recipe.ingredients}
                showing={recipe.showing}
                onRecipeClick={this.props.onRecipeClick}
            />
            </div>
        )
    }

    render(){
        const recipes = this.props.recipes;
        return(
            <div className="recipes">
                <div className="recipes">
                    {Object.keys(recipes).map(this.renderRecipe)}
                </div>
            </div>
            
        )
    }
}

export default Recipes;