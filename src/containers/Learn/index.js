import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import styles from './index.scss';


@hot(module)
@CSSModules(styles)
class Learn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div styleName="learn">
        学习
      </div>
    );
  }
}

export default Learn;
