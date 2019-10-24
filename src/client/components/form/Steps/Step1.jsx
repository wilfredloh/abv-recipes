import React from 'react';
import { withRouter } from 'react-router-dom';


class StepOne extends React.Component {

    render() {
        let type = 'images'
        let name = this.props.recipe.name ? this.props.recipe.name : '';
        let about = this.props.recipe.about ? this.props.recipe.about : '';
        
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
                <p>About</p>
                <input 
                    defaultValue={about}
                    onChange={(event)=>{
                        this.props.saveSingleInput(event.target.value, 'about');
                    }}
                />

                {imagesArr}

                <button 
                    className={`btn btn-light`}
                    onClick={ ()=> {
                        this.props.addInputBar(type);
                    }}>
                    Add image
                </button>
                <button 
                    className={`btn btn-success`}
                    onClick={()=> {
                        this.props.changeStep(true);
                    }}>
                    Choose Ingredients
                </button>
                <button 
                    className={`btn btn-secondary`}
                    onClick={()=> {
                        this.props.backToHome();
                    }}>
                    Back
                </button>
            </div>
        );
    }
}

export default withRouter(StepOne);
