const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

/**
 *
 * @param {string} URL 目录地址
 * @param {string} traget 目标目录地址
 * @param {string} defaultVal 默认字符串
 * @param {string} answer 替换字符串
 */
async function readFile(URL, traget, defaultVal, answer) {
  // 读取第一层目录
  const catalogue = new Promise((res, rej) => {
    fs.readdir(URL, (err, files) => {
      if (err) throw err;
      res(files);
    });
  });

  // 挑选出文件夹和保存html文件
  const files = await catalogue;
  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    // 扫描一级目录
    const fileName = path.resolve(URL, `./${item}`);
    // fileName.replace('\');
    const stat = fs.statSync(fileName);
    if (!stat.isDirectory() && /\.(html)$/.test(fileName)) {
      // 1.单独HTML文件
      console.log(`复制并修改HTML文件：${chalk.yellow(fileName)}`);
      await copyAndChangeFile(
        fileName,
        path.resolve(traget, `./${item}`),
        defaultVal,
        answer
      );
    } else if (!stat.isDirectory() && item === "banner.jpg") {
      // 2.替换banner图片
      console.log(`替换banner：${chalk.red(fileName)}`);
      await copyFile(answer["banner"].trim(), path.resolve(traget, `./${item}`).trim());
    } else if (!stat.isDirectory() && item === "logo.png") {
      // 3.替换logo图片
      console.log(`替换logo：${chalk.red(fileName)}`);
      await copyFile(answer["logo"].trim(), path.resolve(traget, `./${item}`).trim());
    } else if (stat.isDirectory()) {
      // 4.文件夹目录递归处理
      console.log(`复制目录：${chalk.green(fileName)}`);
      fs.mkdir(path.resolve(traget, `./${item}`).trim(), function (err) {
        if (err) throw err;
        readFile(
          fileName,
          path.resolve(traget, `./${item}`),
          defaultVal,
          answer
        );
      });
    } else {
      // 5.其他文件类型
      console.log(`复制文件：${chalk.cyan(fileName)}`);
      await copyFile(fileName, path.resolve(traget, `./${item}`).trim());
    }
  }
}

// 复制文件
function copyFile(formPath, toPath) {
  return new Promise((res, rej) => {
    fs.readFile(formPath, function (err, data) {
      if (err) throw err;
      fs.writeFile(toPath, data, function (error) {
        if (err) throw err;
        res(true);
      });
    });
  });
}

// 复制并替换文件
function copyAndChangeFile(formPath, toPath, defaultVal, answer) {
  return new Promise((res, rej) => {
    fs.readFile(formPath, "utf8", function (err, data) {
      if (err) throw err;
      // 循环默认数据，进行替换操作
      let result = data;
      const keys = Object.keys(defaultVal);
      for (let i = 0; i < keys.length; i++) {
        const reg = new RegExp(defaultVal[keys[i]], "g");
        result = result.replace(reg, answer[keys[i]].trim());
      }
      fs.writeFile(toPath, result, "utf8", function (error) {
        if (err) throw err;
        res(true);
      });
    });
  });
}

module.exports = {
  readFile,
};
