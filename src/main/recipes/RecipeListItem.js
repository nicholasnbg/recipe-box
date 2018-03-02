import React from 'react';
import './RecipeListItem.css';

class RecipeListItem extends React.Component {

    render(){
        const { name, ingredients, showing }=this.props;
        console.log(showing);

        return(
            <li className="recipeListItem">
                <h2>{name}</h2> 
                {showing === true &&(
                    <div className="ingredients">
                        {ingredients.map((ingredient, i) => (
                            <div key={i}>
                                <span>{ingredient}</span>
                                    {(i < ingredients.length-1) && (
                                    <span className="seperator">|</span>
                                )}    
                            </div>
                        ))}
                    </div>
                )}
                
            </li>
        )
    }
}

export default RecipeListItem;