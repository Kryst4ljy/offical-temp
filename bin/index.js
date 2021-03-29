#!/usr/bin/env node
const program = require("commander");
const create = require("../src/libs/create");

// 绑定版本信息以及描述信息
program
  .version(`version is ${require("../package.json").version}`)
  .description("create offical static page from template");

/**
 *
 */
program
  .command("create <project name>")
  .option("-c, --common", "create a common temp")
  .action((dir, cmdObj) => {
    // 因为文件名是必传，所以不需要判空
    // 根据选项来构建不同的模板项目
    if (cmdObj.common) {
      // 通用官网模板
      create(dir, "common");
      return;
    }
    console.log("you should select a option to choose template");
  });

program.parse(process.argv);
