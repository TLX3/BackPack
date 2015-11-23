(function(root) {
  'use strict';
  var Jumbotron = ReactBootstrap.Jumbotron;
  var Nav = ReactBootstrap.Nav;
  var NavItem = ReactBootstrap.NavItem;
  root.DestinationNavbar = React.createClass({
    render: function () {
      return (
        <Jumbotron>
        <h1>{this.props.name}</h1>
          <Nav bsStyle="pills" activeKey={this.props.selectedKey}
               onSelect={this.props.handleSelect}>
            <NavItem eventKey={1} href="">Home</NavItem>
            <NavItem eventKey={2} href="members">Members</NavItem>
            <NavItem eventKey={3} href="photos">Pictures</NavItem>
            <NavItem eventKey={4} href="join">Join Us!</NavItem>
          </Nav>
        </Jumbotron>
      );
    }
  });
}(this));
