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
                    // console.log(filteredArr)
                    mappedArr = filteredArr.map( (recipe, i) => {
                        console.log('recipe img url: ', recipe)
                        return (
                            <div key={i}>
                                <h3>{recipe.name}</h3>
                                <img 
                                src={recipe.img}
                                onClick={()=>{
                                    this.props.chooseRecipe(recipe.id);
                                }}
                                />
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


