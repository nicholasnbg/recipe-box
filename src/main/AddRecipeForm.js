import React from 'react';
import './AddRecipeForm.css';

class AddRecipeForm extends React.Component{

    createRecipe(event){
        event.preventDefault();
        console.log('creating recipe');
        const recipe = {
            name: this.name.value,
            showing: false,
            ingredients: this.ingredients.value.split(',')
        }
        this.props.addRecipe(recipe);
        this.recipeForm.reset();
    }

    render(){

        return(
            <div className="addRecipeForm">
            <h2>Add Recipe</h2>
                <form ref={(input) => this.recipeForm = input}
                className="addRecipe"
                onSubmit={(e)=> this.createRecipe(e)}>
                    <input ref={(input)=> this.name = input} type="text" placeholder="Recipe Name"/>
                    <textarea ref={(input)=>this.ingredients = input} type="text" placeholder="List of ingredients"></textarea>
                    <span>Please seperate ingredients with a comma ","</span>
                    <button type="submit">+ Add Recipe</button>
                </form>
            </div>
        )
    }
}

export default AddRecipeForm;