(function(root) {
  'use strict';
  root.Navbar = React.createClass({
    handleLogout: function () {
      ApiUtil.logOut();
    },
    render: function () {
      return (
        <nav className="navbar">
          <div className="row">
            Welcome, User # {window.CURRENT_USER_ID}
            // <button onClick={this.handleLogout}>Log out</button>
          </div>
        </nav>
      );
    }
  });
}(this));
