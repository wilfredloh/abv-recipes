import React from 'react';

class Search extends React.Component {

    render() {

        let arrayToFilter = this.props.array;
        let filteredArr = ''
        let ingredientsArr = ''
        
        if (arrayToFilter) {
            filteredArr = this.props.searchWord ? arrayToFilter.filter(x => x.name.includes(this.props.searchWord)) 
            : arrayToFilter;

            ingredientsArr = filteredArr.map( (ing, i)=> {
                return (
                    <div key={i}>
                        <input type="checkbox" name="vehicle1" value="Bike"></input>
                        <span>{ing.name}</span>
                    </div>
                )
            })
        } 
    
        return (
            <React.Fragment>
                {ingredientsArr}
            </React.Fragment>
        );
    }
}

export default Search;


