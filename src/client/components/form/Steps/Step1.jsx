import React from 'react';
import { withRouter } from 'react-router-dom';


class StepOne extends React.Component {

    render() {
        let type = 'images'
        let name = this.props.recipe.name ? this.props.recipe.name : '';
        
        let imagesArr = this.props.recipe.images.map((img,i)=>{
            let currentValue = img ? img : '';
            let deleteButton = 
                <button 
                    id={i}
                    onClick={(event)=>{
                        let el = event.target
                        this.props.deleteInputBar(el.id, type);
                    }}
                > x 
                </button>;
            if (i === 0) {
                deleteButton = '';
            }

            return(
                <div key={i}>
                    <p>Image {i+1}</p>
                    <input 
                        id={i}
                        value={currentValue}
                        onChange={(event)=>{
                            let el = event.target;
                            this.props.saveArrayInput(el.id, el.value, type);

                        }}
                    />
                    {deleteButton}
                </div>
            )
        })

        return (
            <div>
                <h1>#1: Basic details</h1>
                <p>Title</p>
                <input 
                    defaultValue={name}
                    onChange={(event)=>{
                        this.props.saveSingleInput(event.target.value, 'name');
                    }}
                />

                {imagesArr}

                <button onClick={ ()=> {
                        this.props.addInputBar(type);
                    }}>
                    Add image
                </button>
                <button 
                    onClick={()=> {
                        this.props.changeStep(true);
                    }}>
                    Choose Ingredients
                </button>
                <button onClick={()=> {
                        this.props.backToHome();
                    }}>
                    Back
                </button>
            </div>
        );
    }
}

export default withRouter(StepOne);
