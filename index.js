#!/usr/bin/env node
const fs = require("fs");
const { exec, execSync } = require("child_process");
try {
  if (!fs.existsSync(".git/")) {
    throw "this directory has no git repository configuration information!";
  }
  let gitUrl = execSync("git config --get remote.origin.url", {
    encoding: "utf-8"
  });
  if (!/http|https/.test(gitUrl)) {
    gitUrl = `http://${gitUrl.replace(":", "/")}`;
  }
  exec(`open ${gitUrl}`);
} catch (error) {
  console.error(error);
}
