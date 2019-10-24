import React from 'react';
import styles from '../style.scss'

import { withRouter } from 'react-router-dom';

class Recipes extends React.Component {

    render() {
        let images = this.props.images ? this.props.images : null;

        let arrayToFilter = this.props.recipes;
        let filteredArr = ''
        let mappedArr = ''
        
        if (arrayToFilter) {
            if (arrayToFilter.length > 0){
                filteredArr = this.props.searchWord ? arrayToFilter.filter(r => r.ingredients.toLowerCase().includes(this.props.searchWord)|| r.name.toLowerCase().includes(this.props.searchWord)) 
                : arrayToFilter;
    
                if (filteredArr.length === 0 && arrayToFilter.length > 0) {
                    mappedArr = 
                    <div>
                        <img src="https://cdn.dribbble.com/users/2860199/screenshots/6916280/31.gif"/>
                        <p>No such recipe or ingredient!</p>
                    </div>
    
                } else {
                
                    mappedArr = filteredArr.map( (recipe, i) => {
                        let src = [];
    
                        if (recipe !== null && images !== null) {
                            for (let i = 0; i < images.length; i++) {
                                if (recipe.id === images[i].recipe_id) {
                                    src.push(images[i].url);
                                }
                            }
                        }
                        
                        return (
                            <div key={i}>
                                <img 
                                src={src[0]}
                                onClick={()=>{
                                    this.props.chooseRecipe(recipe.id);
                                }}
                                />
                                <p>{recipe.name}</p>
                                <button 
                                    onClick={()=>{
                                        this.props.deleteRecipe(recipe.id, i);
                                    }}
                                    >Delete
                                </button>
                            </div>
                        )
                    })
                }
            } else {
                mappedArr = 
                <div>
                    <img src="https://thumbs.gfycat.com/AmbitiousRingedAmazontreeboa-small.gif"/>
                    <p>You don't have any recipes!</p>
                    <button 
                        className="btn btn-success"
                        onClick={()=>{
                            this.props.toCreateForm();
                        }}
                        >Create a recipe
                    </button>
                </div>
            }
        } else {
            mappedArr = 
                <div>
                    <img src="https://thumbs.gfycat.com/AmbitiousRingedAmazontreeboa-small.gif"/>
                    <p>You don't have any recipes!</p>
                    <button 
                        className="btn btn-success"
                        onClick={()=>{
                            this.props.toCreateForm();
                        }}
                        >Create a recipe
                    </button>
                </div>
        }
    
        return (
            <div className={`col-5 ${styles.recipes}`} >
                {mappedArr}
            </div>
        );
    }
}

export default withRouter(Recipes);


