const glob = require("glob-all");

describe("Checking generated html files", () => {
  it("should generate html files", () => {
    const files = glob(["./dist/index.html", "./dist/search.html"]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error("no html files generated");
    }
  });
});
