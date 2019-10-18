import React from 'react';

import styles from './style.scss';

class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'wowowowowow',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.monkey}</p>
        <input className={styles.name} />
      </div>
    );
  }
}

export default Recipe;
