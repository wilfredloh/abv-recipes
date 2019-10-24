import React from 'react';

import { withRouter } from 'react-router-dom';

class Search extends React.Component {

    render() {
        const { ingredients, searchWord, toggleCheck } = this.props;

        let arrayToFilter = ingredients;
        let filteredArr = ''
        let mappedArr = ''
        
        if (arrayToFilter) {
                filteredArr = searchWord ? arrayToFilter.filter(r => r.name.toLowerCase().includes(searchWord)) 
                : arrayToFilter;
    
                if (filteredArr.length === 0) {
                    mappedArr = 
                    <div>
                        <p>No such ingredient!</p>
                    </div>
    
                } else {
                
                    mappedArr = filteredArr.map( (ing, i)=> {
                        let input = ing.checked ? 
                        <input 
                            // className={"form-check-input"}
                            checked
                            id={i}
                            type="checkbox" name="name" 
                            value={ing.id}
                            onClick={(event)=>{
                                let el = event.target;
                                toggleCheck(el.value, el.id);
                            }}
                        ></input> : 
                        <input 
                            // className={"form-check-input"}
                            id={i}
                            type="checkbox" name="name" 
                            value={ing.id}
                            onClick={(event)=>{
                                let el = event.target;
                                toggleCheck(el.value, el.id);
                            }}
                        ></input>

                        return (
                            <div key={ing.id}>
                                {input}
                                <span>{ing.name} ({ing.amount} {ing.measurement})</span>
                            </div>
                        )
                    })
                }
    
        } else {
            mappedArr = 
                <div>
                    <p>There are no ingredients!</p>
                </div>
        }
    
        return (
            <React.Fragment>
                {mappedArr}
            </React.Fragment>
        );
    }
}

export default withRouter(Search);


