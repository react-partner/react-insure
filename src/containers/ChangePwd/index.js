import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import ComHeader from '@/components/Header';
import { BASI_CHANGEPWD as API } from '@/utils/api';
import { Toast } from 'antd-mobile';
import fetch from '@/utils/fetch';
// import { Button, InputItem } from 'antd-mobile';
import styles from './index.scss';

@hot(module)
@CSSModules(styles)
export default class ChangePwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPwd: 'loveme1314',
      newPwd: '',
      againPwd: ''
    };
  }
  oldPwdHandler=(e) => {
    this.setState({
      oldPwd: e.target.value
    });
  };
  newPwdHandler=(e) => {
    this.setState({
      newPwd: e.target.value
    });
  };
  againPwdHandler=(e) => {
    this.setState({
      againPwd: e.target.value
    });
  };
  sureHandler=async () => {
    if (!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,20}$/.test(this.state.oldPwd)) {
      return Toast.info('密码应为8~20位的数字、符号或字母中的2种组合');
    }
    if (!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,20}$/.test(this.state.newPwd)) {
      return Toast.info('密码应为8~20位的数字、符号或字母中的2种组合');
    }
    if (!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,20}$/.test(this.state.againPwd)) {
      return Toast.info('密码应为8~20位的数字、符号或字母中的2种组合');
    }
    if (this.state.againPwd !== this.state.newPwd) {
      return Toast.info('确认密码与新密码不一致');
    }
    const result = await fetch(API, 'changePwd', { oldPwd: this.state.oldPwd, newPwd: this.state.newPwd, againPwd: this.state.againPwd });
    if (result.code === 200) {
      this.props.history.push('/pagebook');
    } else {
      Toast.fail('修改密码失败');
    }
  };
  render() {
    return (
      <div styleName="forgetpwd">
        <ComHeader history={this.props.history}>修改密码</ComHeader>
        <div styleName="content">
          <div styleName="input-wrapper">
            <span styleName="text">旧密码</span>
            <input styleName="input-inner" type="text" placeholder="15227760778" value={this.state.oldPwd} onChange={this.oldPwdHandler} />
            <span className="iconfont icon-eye_close" />
          </div>
          <div styleName="input-wrapper">
            <span styleName="text">新密码</span>
            <input styleName="input-inner" type="password" placeholder="请输入新密码" value={this.state.newPwd} onChange={this.newPwdHandler} />
          </div>
          <div styleName="input-wrapper">
            <span styleName="text">确认密码</span>
            <input styleName="input-inner" type="password" placeholder="请再次输入密码" value={this.state.againPwd} onChange={this.againPwdHandler} />
          </div>
        </div>
        <div styleName="btn">
          <button styleName="login-btn" onClick={this.sureHandler}>确定</button>
        </div>

      </div>
    );
  }
}
