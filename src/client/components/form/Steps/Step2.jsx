import React from 'react';
import { withRouter } from 'react-router-dom';

import Search from '../../Search/Search';

class StepTwo extends React.Component {
    
    constructor() {
        super();
        this.state = {
            // ingredients : null,
            // checkedArray : null,
            searchWord : null,
            searchType : 'ing'
        }
        this.setWord = this.setWord.bind(this);
        // this.toggleCheck = this.toggleCheck.bind(this);
    }
    componentDidMount() {
        // get all ingredients for user to choose
        fetch(`/api/ingredients/`)
            .then(res => res.json())
            .then(json => {
                let mappedIng = json.map((ing)=>{
                    ing.checked = false;
                    return ing;
                })
                this.setState({ ingredients: mappedIng })
            });
    }

    setWord(event) {
        let input = event.target.value;
        this.setState({searchWord : input});
    }

    render() {
        
        return (
            <div>
                <h1>#2: Choose Ingredients</h1>
                <input placeholder="search ingredient" onChange={this.setWord}></input>
                <br/>
                <Search
                    array = {this.props.ingredients}
                    searchWord = {this.state.searchWord}
                    searchType = {this.state.searchType}
                    toggleCheck = {this.props.toggleCheck}
                />
                <button onClick={ ()=> {
                    this.props.changeStep(true)
                    }}>
                    Fill in instructions
                </button>
                <button onClick={ ()=> {
                    this.props.changeStep(false)
                    }}>
                    Back
                </button>
            </div>
        );
    }
}

export default withRouter(StepTwo);


