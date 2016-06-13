//import Hello from './components/Hello';
var ReactDOM = require('react-dom');
var React= require('react');
require('./css/global_style.less');
//require('./components/index.js');
var Hello = require('./components/Hello');
ReactDOM.render(<Hello name="Nate" />, document.getElementById('output'));
