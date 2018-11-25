import { LocaleProvider, Pagination, Radio } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import Ar_EG from "antd/lib/locale-provider/ar_EG";
import moment from "moment";
import "moment/locale/zh-cn";
import React from "react";

moment.locale("en");

class Page extends React.Component {
  render() {
    return (
      <div className="locale-components">
        <div className="example">
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>
      </div>
    );
  }
}

class Antd extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: null
    };
  }

  changeLocale = e => {
    const localeValue = e.target.value;
    // 英文 unfind
    // 中文 zhCN
    console.log(localeValue);
    this.setState({ locale: localeValue });
    if (!localeValue) {
      moment.locale("en");
    } else {
      moment.locale("zh-cn");
    }
  };

  render() {
    const { locale } = this.state;
    console.log(locale)
    return (
      <div>
        <div className="change-locale">
          <span style={{ marginRight: 16 }}>选择中英文组件显示方式: </span>
          <Radio.Group defaultValue={undefined} onChange={this.changeLocale}>
            <Radio.Button key="en" value={undefined}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>
        <LocaleProvider locale={Ar_EG}>
          <Page /* 必须刷新生产环境 */ />
        </LocaleProvider>
      </div>
    );
  }
}

export default Antd;
