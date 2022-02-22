'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var resizing_route_1 = __importDefault(require('./routes/resizing_route'));
var app = (0, express_1.default)();
var port = 3000;
app.use('/', resizing_route_1.default);
// app.get('/',(req,res)=>{
//     res.send('hello');
// })
app.listen(port, function () {
  console.log('server is running on http://localhost:'.concat(port));
});
exports.default = app;
