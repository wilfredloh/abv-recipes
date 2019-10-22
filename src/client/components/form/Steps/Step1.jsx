import React from 'react';
import { withRouter } from 'react-router-dom';


class StepOne extends React.Component {

    constructor() {
        super();
        this.state = {
          images: [null],
        }
    }
    
    clickHandler(){
        this.setState({images: [...this.state.images, null]})
        // this.nameInput.focus();
    }

    // componentDidUpdate(){
    //   }

    render() {
        // console.log('thispropsname, ' , this.props.name)
        let name = this.props.recipe.name ? this.props.recipe.name : '';
        let imagesArr = this.props.recipe.images.map((img,i)=>{
            // let imgVal = img ? img : '';

            let x = img ? img : '';
            let deleteButton = 
                <button 
                    id={i}
                    onClick={(event)=>{
                        let el = event.target
                        this.props.deleteImagesInput(el.id);
                    }}
                > x 
                </button>;
            if (i === 0) {
                deleteButton = '';
            }
            let ref = (input) => { this.nameInput = input }
            return(
                <div key={i}>
                    <p>Image {i+1}</p>
                    <input 
                        id={i}
                        ref={ref} 
                        value={x}
                        onChange={(event)=>{
                            let el = event.target;
                            // this.state.images[el.index] = el.value
                            this.props.saveArrayInput(el.id, el.value);

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
                        this.props.addImagesInput();
                    }}>
                    Add image
                </button>
                {/* <input 
                    ref={(input) => { this.nameInput = input; }} 
                    defaultValue="will focus"
                /> */}
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
