import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import styles from './index.scss';


@hot(module)
@CSSModules(styles)
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }
  getTiTleClass=(index) => (index === this.state.currentIndex ? 'title__item title__item--active' : 'title__item');
  getContentClass=(index) => (index === this.state.currentIndex ? 'tab__content tab__content--show' : 'tab__content');
  changeIndex=(index) => {
    this.setState({ currentIndex: index });
  }

  render() {
    return (
      <div styleName="tab">
        <div styleName="tab__title">
          {this.props.tabs.map((item, index) => (<span
            key={Math.random()}
            onClick={() => { this.changeIndex(index); }}
            className={this.getTiTleClass(index)}
          >{item}
          </span>)
        )}
        </div>
        {this.props.children.map((item, index) => (<div
          key={Math.random()}
          className={this.getContentClass(index)}
        >{item}</div>))}
      </div>
    );
  }
}

export default Tab;
