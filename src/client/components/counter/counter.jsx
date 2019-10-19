import React from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import styles from './style.scss';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      banana: 'sneakers',
    };
    this.clickHandler = this.clickHandler.bind(this);

  }

  clickHandler(){
    setTimeout(()=>{
      this.props.history.push('/index');
    },100);
  }

  render() {
    return (
      <div>
        <p className={styles.desc}>
          {this.props.message} : {this.state.banana}
        </p>
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>

    );
  }
}

// Counter.propTypes = {
//   message: PropTypes.string.isRequired,
// };

// export default Counter;
export default withRouter(Counter);
