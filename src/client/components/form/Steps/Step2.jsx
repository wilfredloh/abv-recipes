import React from 'react';
import { withRouter } from 'react-router-dom';

import Search from '../../Search/Search';

class StepTwo extends React.Component {
    
    constructor() {
        super();
        this.state = {
            ingredients : null,
            searchWord : null,
        }
        this.setWord = this.setWord.bind(this);
    }
    componentDidMount() {
        // get all ingredients for user to choose
        fetch(`/api/ingredients/`)
            .then(res => res.json())
            .then(json => 
                this.setState({ingredients: json})
            );
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
                    array = {this.state.ingredients}
                    searchWord = {this.state.searchWord}
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


