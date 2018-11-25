import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MRoute from "./routes/index";
import registerServiceWorker from "./registerServiceWorker";
import { LocaleProvider } from "antd";
import Ar_EG from "antd/lib/locale-provider/ar_EG";

import zhCN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("en");

ReactDOM.render(
  <LocaleProvider locale={Ar_EG}>
    <MRoute />
    </LocaleProvider>,
  document.getElementById("root")
);
registerServiceWorker();
