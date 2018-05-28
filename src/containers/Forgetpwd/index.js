import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import ComHeader from '@/components/Header';
import { BASI_GETCODE as API } from '@/utils/api';
import { Toast } from 'antd-mobile';
import fetch from '@/utils/fetch';
// import { Button, InputItem } from 'antd-mobile';
import styles from './index.scss';

@hot(module)
@CSSModules(styles)
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tel: '15227760778',
      code: '',
      password: '',
      timerTitle: '获取验证码',
      timerCount: '60',
      counting: false
      // selfEnable: true
    };
  }
  getCodeHandler=async () => {
    if (this.state.counting) { return; }
    this.conutDownAction();
    this.setState({ counting: true });
  }
  conutDownAction=async () => {
    const codeTime = this.state.timerCount;
    const timertitle = this.state.timerTitle;
    const nowData = Date.now();
    const overTimeStamp = nowData + ((codeTime * 1000) + 100);
    this.interval = setInterval(() => {
      const nowStamp = Date.now();
      if (nowStamp >= overTimeStamp) {
        // this.interval&&clearInterval(this.interval);
        this.setState({
          timerCount: codeTime,
          timerTitle: timertitle || '获取验证码',
          counting: false
        });
      } else {
        const leftTime = parseInt((overTimeStamp - nowStamp) / 1000, 10);
        const timerActiveTitle = [];
        let activeTitle = `(${leftTime}s)`;
        if (timerActiveTitle) {
          if (timerActiveTitle.length > 1) {
            activeTitle = timerActiveTitle[0] + leftTime + timerActiveTitle[1];
          } else if (timerActiveTitle.length > 0) {
            activeTitle = timerActiveTitle[0] + leftTime;
          }
        }
        this.setState({
          timerCount: leftTime,
          timerTitle: activeTitle,
        });
      }
    }, 1000);
  };
  telHandler=(e) => {
    this.setState({
      tel: e.target.value
    });
  };
  codeHandler=(e) => {
    this.setState({
      code: e.target.value
    });
  };
  pwdHandler=(e) => {
    this.setState({
      password: e.target.value
    });
  };
  sureHandler=async () => {
    if (!/^1[3456789]\d{9}$/.test(this.state.tel)) {
      return Toast.info('手机号格式不正确');
    }
    if (!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,20}$/.test(this.state.password)) {
      return Toast.info('密码应为8~20位的数字、符号或字母中的2种组合');
    }
    if (!this.state.code) {
      return Toast.info('请输入验证码');
    }
    const result = await fetch(API, 'getCheck', { tel: this.state.tel, pwd: this.state.password, verifyCode: this.state.code });
    if (result.code === 200) {
      this.props.history.push('/pagebook');
    } else {
      Toast.fail('修改密码失败');
    }
  };
  render() {
    return (
      <div styleName="forgetpwd">
        <ComHeader history={this.props.history}>忘记密码</ComHeader>
        <div styleName="content">
          <div styleName="input-wrapper">
            <span styleName="text">手机号码</span>
            <input styleName="input-inner" type="tel" placeholder="15227760778" value={this.state.tel} onChange={this.telHandler} maxLength="11" />
          </div>
          <div styleName="input-wrapper">
            <span styleName="text">验证码</span>
            <input styleName="input-inner" type="tel" placeholder="请输入验证码" value={this.state.code} onChange={this.codeHandler} maxLength="6" />
            <span styleName="getcode" onClick={this.getCodeHandler} >{this.state.timerTitle}</span>
          </div>
          <div styleName="input-wrapper">
            <span styleName="text">新密码</span>
            <input styleName="input-inner" type="password" placeholder="请输入新密码" value={this.state.password} onChange={this.pwdHandler} />
            <span className="iconfont icon-eye_close" />
          </div>
        </div>
        <div styleName="btn">
          <button styleName="login-btn" onClick={this.sureHandler}>确定</button>
        </div>

      </div>
    );
  }
}
