const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { readFile } = require("./utils");
const { common, commonDefault } = require("../config/inquirers");

module.exports = async (name, option) => {
  // 1.先检测文件名是否已经存在
  const fsDefault = await new Promise((resolve, reject) => {
    fs.access(name, fs.constants.F_OK, (err) => {
      err ? resolve(true) : resolve(false);
    });
  }).catch((error) => {
    console.log("error：", error);
  });
  if (!fsDefault) {
    console.error("当前目录文件夹已经存在！");
    return;
  }

  // 2.通过交互式命令获取所有更改项
  const inquirers = inquirer.prompt(common);
  const answers = await inquirers;

  // 3.复制模板文件并根据修改项修改文件
  const demoURL = path.resolve(__dirname, "../temp/common");
  const targetURL = path.resolve(`./${name}`);
  const mkdirPromise = await new Promise((res, rej) => {
    fs.mkdir(targetURL, function (err) {
      if (err) throw err;
      res(true);
    });
  });
  mkdirPromise && readFile(demoURL, targetURL, commonDefault, answers);
};
