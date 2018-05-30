import React, { Component } from 'react';
// import { is, fromJS } from 'immutable';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import { TabBar } from 'antd-mobile';
// import { BASE_API as API } from '@/utils/api';
// import fetch from '@/utils/fetch';
import { connect } from 'react-redux';
import getUserData from '@/redux/user/action';
import ComHeader from '@/components/Header';
import Home from '@/containers/Home';
import Customer from '@/containers/Customer';
import Learn from '@/containers/Learn';
import Mine from '@/containers/Mine';
import { Route } from 'react-router-dom';
import styles from './index.scss';


@hot(module)
@CSSModules(styles)
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '首页'
    };
  }

  render() {
    return (

      <div style={{
position: 'fixed', height: '100%', width: '100%', top: 0
}}
      >
        <ComHeader history={this.props.history}>{this.state.title}</ComHeader>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
}}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
}}
            />
            }
            selected={this.props.match.path === '/'}
            badge={1}
            onPress={() => {
              this.setState({
                title: '首页'
              });
              this.props.history.replace('/');
            }}
            data-seed="logId"
          >
            <Route path="/" exact component={Home} />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
}}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
}}
              />
            }
            title="客户"
            key="customer"
            badge="哈"
            selected={this.props.match.path === '/customer'}
            onPress={() => {
              this.setState({
                title: '客户'
              });
              this.props.history.replace('/customer');
            }}
            data-seed="logId1"
          >
            <Route path="/customer" component={Customer} />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
}}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
}}
              />
            }
            title="学习"
            key="learn"
            dot
            selected={this.props.match.path === '/learn'}
            onPress={() => {
              this.setState({
                title: '学习'
              });
              this.props.history.replace('/learn');
            }}
          >
            <Route path="/learn" component={Learn} />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="mine"
            selected={this.props.match.path === '/mine'}
            onPress={() => {
              this.setState({
                title: '我的'
              });
              this.props.history.replace('/mine');
            }}
          >
            <Route path="/mine" component={Mine} />
          </TabBar.Item>
        </TabBar>

      </div>
    );
  }
}

export default connect(state => ({
  userData: state.userData,
}), {
  getUserData
})(Index);
