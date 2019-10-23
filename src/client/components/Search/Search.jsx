import React from 'react';

class Search extends React.Component {

    render() {
        let images = this.props.images ? this.props.images : null;

        let arrayToFilter = this.props.array;
        let searchType = this.props.searchType;
        let filteredArr = ''
        let mappedArr = ''
        
        // console.log("arrayToFilter: ", arrayToFilter);
        if (arrayToFilter) {
            filteredArr = this.props.searchWord ? arrayToFilter.filter(r => r.name.toLowerCase().includes(this.props.searchWord)) 
            : arrayToFilter;

            if (filteredArr.length === 0) {
                mappedArr = <h2>Empty Search</h2>
            } else {
                if (searchType === 'ing'){
                    mappedArr = filteredArr.map( (ing, i)=> {
                        let input = ing.checked ? 
                        <input 
                            checked
                            id={i}
                            type="checkbox" name="name" 
                            value={ing.id}
                            onClick={(event)=>{
                                let el = event.target;
                                this.props.toggleCheck(el.value, el.id);
                            }}
                        ></input> : 
                        <input 
                            id={i}
                            type="checkbox" name="name" 
                            value={ing.id}
                            onClick={(event)=>{
                                let el = event.target;
                                this.props.toggleCheck(el.value, el.id);
                            }}
                        ></input>

                        return (
                            <div key={ing.id}>
                                {input}
                                <span>{ing.name} ({ing.amount} {ing.measurement})</span>
                            </div>
                        )
                    })
                } else if (searchType === 'recipes') {
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
                            </div>
                        )
                    })
                }
            }
        } else {
            mappedArr = <h2>No recipes!</h2>
        }
    
        return (
            <React.Fragment>
                {mappedArr}
            </React.Fragment>
        );
    }
}

export default Search;


