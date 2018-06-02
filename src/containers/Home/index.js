import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import Tab from '@/components/Tab';
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
        <Tab tabs={['第一栏', '第二栏', '第三栏']}>
          <div>内容一</div>
          <div>内容二</div>
          <div>内容三</div>
        </Tab>
      </div>
    );
  }
}

export default Home;
