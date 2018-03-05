import React from 'react';
import './AddRecipeForm.css';

class AddRecipeForm extends React.Component{

    state= {
        name: '',
        ingredients: '',
        nameValid: false,
        ingredientsValid: false,
        formValid: false
    }

    handleUserInput = e => {
        const name = e.target.name
        const value = e.target.value;
        this.setState({[name]: value});
        this.validateFields(name);
    }

    validateFields = name => {
        if(this.state.name !==''){
            this.setState({[`${name}Valid`]: true})
        }
        this.isFormValid();
    }

    isFormValid = () => {
        if(this.state.nameValid && this.state.ingredientsValid){
            this.setState({formValid: true});
        }
    }

    resetStateValidation = () => {
        this.setState({
            name: '',
            ingredients: '',
            nameValid: false,
            ingredientsValid: false,
            formValid: false
        });
    }

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
        this.resetStateValidation();
    }

    render(){
        let formValid = this.state.formValid;

        return(
            <div className="addRecipeForm">
            <h2>Add Recipe</h2>
                <form ref={(input) => this.recipeForm = input}
                className="addRecipe"
                onSubmit={(e)=> this.createRecipe(e)}>
                    <input ref={(input)=> this.name = input} onChange={e => this.handleUserInput(e)} type="text" name="name" placeholder="Recipe Name"/>
                    <textarea ref={(input)=>this.ingredients = input} onChange={e => this.handleUserInput(e)} type="text" name="ingredients" placeholder="List of ingredients"></textarea>
                    <span>Please seperate ingredients with a comma ","</span>
                    <button type="submit" disabled={!this.state.formValid}>+ Add Recipe</button>
                </form>
            </div>
        )
    }
}

export default AddRecipeForm;