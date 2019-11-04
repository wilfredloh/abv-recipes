import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../style.scss';


class StepOne extends React.Component {

    constructor() {
        super()
        this.state = {
            checkName : false,
            reminder: ''
        }
    }
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
                    className="btn btn-outline-danger m-2"
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
                    <div className={styles.newInput}>
                        <p>Image {i+1}</p>
                        {deleteButton}
                    </div>
                    <input 
                        className="form-control"
                        id={i}
                        value={currentValue}
                        placeholder="http://www.google.com"
                        onChange={(event)=>{
                            let el = event.target;
                            saveArrayInput(el.id, el.value, type);
                        }}
                    />
                    
                </div>
            )
        })

        return (
            <div>
                <div className={styles.topContainer}>
                    <h1>Basic Details</h1>
                    <button 
                        className={`btn btn-secondary`}
                        onClick={()=> {
                            backToHome();
                        }}>
                        Back
                    </button>
                </div>
                <p>Title</p>
                <input 
                    className="form-control"
                    defaultValue={name}
                    placeholder="Mushroom pizza"
                    onChange={(event)=>{
                        saveSingleInput(event.target.value, 'name');
                        if (event.target.value){
                            this.setState( {checkName: true} )
                        }
                    }}
                />
                <p>About</p>
                <textarea 
                    className="form-control"
                    defaultValue={about}
                    placeholder="This pizza is made with..."
                    onChange={(event)=>{
                        saveSingleInput(event.target.value, 'about');
                    }}
                />

                {imagesArr}
                
                <div className={styles.buttonContainer}>
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
                            if (this.state.checkName) {
                                changeStep(true);
                            } else {
                                this.setState({reminder: 'Please fill in a recipe name!'});
                            }
                            this.state.checkName = false
                        }}>
                        Choose Ingredients
                    </button>
                <p className={styles.reminder}>{this.state.reminder}</p>
                    
                </div>
            </div>
        );
    }
}

export default withRouter(StepOne);
