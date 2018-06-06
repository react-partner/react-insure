import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';
import headPng from '@/assets/images/login.png';
import styles from './index.scss';


@hot(module)
@CSSModules(styles)
class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div styleName="mine">
        <div styleName="userInfo">
          <div styleName="head">
            <img styleName="head__img" src={headPng} alt="头像图标" />
            <div styleName="head_content">
              <h2>郝志成</h2>
              <div>
                中国人寿经纪人
                <span className="iconfont icon-probate" />
                <i styleName="probate">已认证</i>
              </div>
            </div>
            <span className="iconfont icon-qrcode" />
            <i className="iconfont icon-arrow_right" />
          </div>
        </div>
        <div styleName="conent">
          <div className="mine-list">
            <span className="iconfont icon-order" />
            <span styleName="list-content">个险订单</span>
            <i className="iconfont icon-arrow_right" />
          </div>
        </div>
        <div styleName="conent">
          <div className="mine-list bor-b">
            <span className="iconfont icon-own" />
            <span styleName="list-content">个人绩效</span>
            <i className="iconfont icon-arrow_right" />
          </div>
          <div className="mine-list bor-b">
            <span className="iconfont icon-team" />
            <span styleName="list-content">团队绩效</span>
            <i className="iconfont icon-arrow_right" />
          </div>
          <div className="mine-list">
            <span className="iconfont icon-money" />
            <span styleName="list-content">工资条</span>
            <i className="iconfont icon-arrow_right" />
          </div>
        </div>
        <div styleName="conent">
          <div className="mine-list">
            <span className="iconfont icon-invite" />
            <span styleName="list-content">邀请好友</span>
            <i className="iconfont icon-arrow_right" />
          </div>
        </div>
        <div styleName="conent">
          <div className="bor-b mine-list">
            <span className="iconfont icon-changepwd" />
            <span styleName="list-content">修改密码</span>
            <i className="iconfont icon-arrow_right" />
          </div>
          <div className="mine-list">
            <span className="iconfont icon-aboutus" />
            <span styleName="list-content">关于我们</span>
            <i className="iconfont icon-arrow_right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Mine;
