import React from 'react';
import styles from '../style.scss'

import { withRouter } from 'react-router-dom';

class Recipes extends React.Component {

    render() {
        let {
            chooseRecipe,
            deleteRecipe,
            images,
            recipes,
            searchWord,
            toCreateForm,
        } = this.props;

        let imagesCont = images ? images : null;

        let arrayToFilter = recipes;
        let filteredArr = ''
        let mappedArr = ''
        
        if (arrayToFilter) {
            if (arrayToFilter.length > 0){
                filteredArr = searchWord ? arrayToFilter.filter(r => r.ingredients.toLowerCase().includes(searchWord)|| r.name.toLowerCase().includes(searchWord)) 
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
    
                        if (recipe !== null && imagesCont !== null) {
                            for (let i = 0; i < imagesCont.length; i++) {
                                if (recipe.id === imagesCont[i].recipe_id) {
                                    src.push(imagesCont[i].url);
                                }
                            }
                        }
                        
                        return (
                            <div key={i}>
                                <img 
                                src={src[0]}
                                onClick={()=>{
                                    chooseRecipe(recipe.id);
                                }}
                                />
                                <p>{recipe.name}</p>
                                <button 
                                    onClick={()=>{
                                        deleteRecipe(recipe.id, i);
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
                            toCreateForm();
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
                            toCreateForm();
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


