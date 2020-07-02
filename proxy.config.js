const proxy = [
  {
    context: "/api/item",
    target: "https://apirest-todolist.herokuapp.com",
    pathRewrite: { "^/api/item": "" },
  },
];

module.exports = proxy;
