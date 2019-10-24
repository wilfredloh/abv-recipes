import React from 'react';
import { withRouter } from 'react-router-dom';


class StepOne extends React.Component {

    render() {
        const { 
            addInputBar,
            backToHome,
            changeStep,
            deleteInputBar, 
            recipe, 
            saveArrayInput, 
            saveSingleInput,
        } = this.props;

        let type = 'images'
        let name = recipe.name ? recipe.name : '';
        let about = recipe.about ? recipe.about : '';
        
        let imagesArr = recipe.images.map((img,i)=>{
            let currentValue = img ? img : '';
            let deleteButton = 
                <button 
                    id={i}
                    onClick={(event)=>{
                        let el = event.target
                        deleteInputBar(el.id, type);
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
                            saveArrayInput(el.id, el.value, type);

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
                        saveSingleInput(event.target.value, 'name');
                    }}
                />
                <p>About</p>
                <textarea 
                    defaultValue={about}
                    onChange={(event)=>{
                        saveSingleInput(event.target.value, 'about');
                    }}
                />

                {imagesArr}

                <button 
                    className={`btn btn-light`}
                    onClick={ ()=> {
                        addInputBar(type);
                    }}>
                    Add image
                </button>
                <button 
                    className={`btn btn-success`}
                    onClick={()=> {
                        changeStep(true);
                    }}>
                    Choose Ingredients
                </button>
                <button 
                    className={`btn btn-secondary`}
                    onClick={()=> {
                        backToHome();
                    }}>
                    Back
                </button>
            </div>
        );
    }
}

export default withRouter(StepOne);
