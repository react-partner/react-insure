import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import ComHeader from '@/components/Header';
import styles from './index.scss';

const routes = [
  { link: '/', name: '首页' },
  { link: '/demo', name: 'demo页' },
  { link: '/login', name: '登录' },
  { link: '/forgetpwd', name: '忘记密码' },
  { link: '/changePwd', name: '修改密码' }
];

@hot(module)
@CSSModules(styles)
class PageBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="pagebook">
        <ComHeader history={this.props.history}>页面集合</ComHeader>
        <ul styleName="pages">
          {routes.map(item => (<li styleName="pages__item" key={item.link}><NavLink to={item.link} activeStyle={{ color: 'green', fontWeight: 'bold' }}>{item.name}</NavLink></li>))}
        </ul>
      </div>
    );
  }
}

export default PageBook;
