import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import ComHeader from '@/components/Header';
import { Carousel, WingBlank } from 'antd-mobile';
import { is, fromJS } from 'immutable';
import styles from './index.scss';

const routes = [
  { link: '/', name: '首页', styObj: { color: `#${Math.floor(Math.random() * 16777215).toString(16)}` } },
  { link: '/demo', name: 'demo页', styObj: { color: `#${Math.floor(Math.random() * 16777215).toString(16)}` } },
  { link: '/login', name: '登录', styObj: { color: `#${Math.floor(Math.random() * 16777215).toString(16)}` } },
  { link: '/forgetpwd', name: '忘记密码', styObj: { color: `#${Math.floor(Math.random() * 16777215).toString(16)}` } },
  { link: '/changePwd', name: '修改密码', styObj: { color: `#${Math.floor(Math.random() * 16777215).toString(16)}` } }
];

@hot(module)
@CSSModules(styles)
class PageBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: ['1', '2', '3'],
      imgHeight: 176,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  }
  render() {
    return (
      <div styleName="pagebook">
        <ComHeader history={this.props.history}>页面集合</ComHeader>
        <ul styleName="pages">
          {routes.map(item => (<li style={item.styObj} styleName="pages__item" key={item.link}><NavLink to={item.link} activeStyle={{ fontWeight: 'bold' }}>{item.name}</NavLink></li>))}
        </ul>
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
          >
            {['1', '2', '3'].map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                  // fire window resize event to change height
                  // window.dispatchEvent(new Event('resize'));
                  // this.setState({ imgHeight: 'auto' });
                }}
                />
              </a>
          ))}
          </Carousel>
        </WingBlank>
      </div>
    );
  }
}

export default PageBook;
