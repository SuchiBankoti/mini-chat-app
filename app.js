function appMethods() {
  return {
    post: function (url, fn) {
      fn();
    },
    get: function (url, fn) {
      console.log("get");
    },
    use: function (fn) {
      console.log("use");
    },
  };
}
function handleRequest(req, res) {
  if (req.url === url) {
  }
}
const app = appMethods();
app.get();
