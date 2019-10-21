import React from 'react';

class Search extends React.Component {

    render() {
        let arrayToFilter = this.props.array;
        let searchType = this.props.searchType;
        let filteredArr = ''
        let mappedArr = ''
        
        if (arrayToFilter) {
            filteredArr = this.props.searchWord ? arrayToFilter.filter(x => x.name.toLowerCase().includes(this.props.searchWord)) 
            : arrayToFilter;

            if (filteredArr.length === 0) {
                mappedArr = <h2>Empty Search</h2>
            } else {
                if (searchType === 'ing'){
                    mappedArr = filteredArr.map( (ing, i)=> {
                        return (
                            <div key={i}>
                                <input type="checkbox" name="name" value={ing.id}></input>
                                <span>{ing.name} ({ing.amount} {ing.measurement})</span>
                            </div>
                        )
                    })
                } else if (searchType === 'recipes') {
                    mappedArr = filteredArr.map( (recipe, index) => {
                        return (
                            <div key={index}>
                                <h3>{recipe.name}</h3>
                                <img 
                                src={recipe.img}
                                onClick={()=>{
                                    this.props.chooseRecipe(recipe.id);
                                }}
                                />
                                {/* <button >Choose
                                </button> */}
                            </div>
                        )
                    });
                }
            }
        } 
    
        return (
            <React.Fragment>
                {mappedArr}
            </React.Fragment>
        );
    }
}

export default Search;


