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
        console.log('increase images count!')
        console.log(this.state.images);
        this.setState({images: [...this.state.images, null]})
        console.log(this.state.images);
        this.nameInput.focus();
    }

    // componentDidUpdate(){
    //   }

    render() {
        let imagesArr = this.state.images.map((img,i)=>{
            let ref = (input) => { this.nameInput = input }
            return(
                <div>
                    <p>Image {i+1}</p>
                    <input 
                        key={i}
                        ref={ref} 
                        onChange={(event)=>{
                            this.props.saveInput(event.target.value, 'img');
                            // var key = event.which || event.keyCode;
                            // if (key === 13) { // 13 is enter
                            //     if (event.target.value) {
                            //         console.log(event.which) 
                            //         this.clickHandler(); 
                            //     }
                            // }
                        }}
                    />
                </div>
            )
        })

        return (
            <div>
                <h1>#1: Basic details</h1>

                <p>Title</p>
                <input 
                    onChange={(event)=>{
                        this.props.saveInput(event.target.value, 'name');
                    }}
                    
                />
                {imagesArr}
                <button onClick={ ()=> {
                        this.clickHandler();
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
