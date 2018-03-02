import React from 'react';
import './RecipeListItem.css';

class RecipeListItem extends React.Component {
    state ={
        isShowing: false
    }

    toggleShowing = () => {
        this.state.isShowing ? this.setState({isShowing: false}) : this.setState({isShowing: true});
    }

    render(){
        const { name, ingredients, id }=this.props;

        const displayStyle={"display":this.state.isShowing ? '' : 'none'};

        return(
            <li className="recipeListItem" id={name} onClick={this.toggleShowing}>
                <h2>{name}</h2> 
                {/* {this.state.isShowing === true &&( */}
                    <div className="ingredients" style={displayStyle}>
                        {ingredients.map((ingredient, i) => (
                            <div key={i}>
                                <span>{ingredient}</span>
                                    {(i < ingredients.length-1) && (
                                    <span className="seperator">|</span>
                                )}    
                            </div>
                        ))}
                    </div>
                {/* )} */}
                
            </li>
        )
    }
}

export default RecipeListItem;