import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import styles from './index.scss';


@hot(module)
@CSSModules(styles)
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div styleName="home">
        首页
      </div>
    );
  }
}

export default Home;
