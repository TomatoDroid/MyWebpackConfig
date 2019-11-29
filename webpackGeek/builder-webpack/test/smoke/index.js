const Mocha = require("mocha");
const Path = require("path");
const Webpack = require("webpack");
const rimraf = require("rimraf");

const mocha = new Mocha({
  timeout: "10000ms"
});

process.chdir(Path.join(__dirname, "template"));

rimraf("./dist", () => {
  const prodConfig = require("../../lib/webpack.prod.js");

  Webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error('err', err);
      process.exit(2);
    }
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false
      })
    );

    console.log("Webpack build success, begin run test.");

    mocha.addFile(path.join(__dirname, "html-test.js"));
    mocha.addFile(path.join(__dirname, "css-js-test.js"));
    mocha.run();
  });
});
