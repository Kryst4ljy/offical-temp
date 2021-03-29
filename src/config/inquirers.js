const path = require("path");

const common = [
  {
    type: "Input",
    name: "abbreviation",
    message: "请输入公司简称：",
    default: "微音文化",
  },
  {
    type: "Input",
    name: "fullName",
    message: "请输入公司全称：",
    default: "重庆市微音文化传媒有限公司",
  },
  {
    type: "Input",
    name: "address",
    message: "请输入地址：",
    default: "重庆市渝北区金开大道西段210号3楼3号附19-01-000228号",
  },
  {
    type: "Input",
    name: "phone",
    message: "请输入联系电话：",
    default: "0571-56331507",
  },
  {
    type: "Input",
    name: "admin",
    message: "请输入负责人：",
    default: "陆诗云",
  },
  {
    type: "Input",
    name: "ICP",
    message: "请输入ICP备案号：",
    default: "渝ICP备19004681号",
  },
  {
    type: "Input",
    name: "banner",
    message: "请输入首页banner图片：",
    default: path.resolve(__dirname, "../temp/common/images/banner/banner.jpg"),
  },
  {
    type: "Input",
    name: "logo",
    message: "请输入logo图片：",
    default: path.resolve(__dirname, "../temp/common/images/logo.png"),
  },
];

const commonDefault = {
  fullName: "重庆市微音文化传媒有限公司",
  address: "重庆市渝北区金开大道西段210号3楼3号附19-01-000228号",
  abbreviation: "微音文化",
  phone: "0571-56331507",
  admin: "陆诗云",
  ICP: "渝ICP备19004681号",
};

module.exports = {
  common,
  commonDefault,
};
