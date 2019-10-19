import React from 'react';
// import styles from './style.scss';

import Recipes from './Recipes/Recipes';
import { withRouter } from 'react-router-dom';

// import SingleRecipe from './SingleRecipe/SingleRecipe';


class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            monkey: 'wowowowowow',
            data: null,
            data2: 'hi',
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        // console.log('in component')

        // fetch('http://swapi.co/api/people/1')
        fetch('http://localhost:3000/test', {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }})
            .then(res => res.json())
            .then(json => this.setState({data: json}))
            .catch(error => console.log(error))
    }

    clickHandler() {
        setTimeout(()=>{
        this.props.history.push('/new');
        },100);
    }

    render() {
        // console.log(this.state.data);
        return (
            <div>
                <h1>Index Page</h1>
                <input value="search"></input>
                <button onClick={this.clickHandler}>Create New Recipe</button>
                <Recipes data={this.state.data}/>
                {/* <SingleRecipe /> */}
                Hello
            </div>
        );
    }
}

// export default Index;
export default withRouter(Index);
