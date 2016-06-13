/*export default class Hello extends React.Component {
  render() {
    return (
      <div>
	  <h1>Hello World  {this.props.name}!</h1>
	  </div>
    );
  }
}
*/

var React = require('react');
module.exports = React.createClass({
  render() {
    return (
      <div>
	  <h1>Hello World  {this.props.name}!</h1>
	  </div>
    );
  }
});

