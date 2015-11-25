(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
  var IndexLink = ReactRouter.IndexLink;
  root.Navbar = React.createClass({
    handleLogout: function () {
      ApiUtil.logOut();
    },
    render: function () {
      var url = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p50x50/17197_973116516046296_1926579651899671635_n.jpg?oh=0894c27976de748a47b492ea25f7e329&oe=56E8CDD1&__gda__=1458139388_12198fe7dcff1fff0362ea7e3356a5fa";
      return (
        <nav className="navbar navbar-default override-navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#example-navbar-collapse-1"
              aria-expanded="false">
                <span className="sr-only">Toggle nav</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"></a>
              <Link to="/"><img src={url} alt="logo" id="logo"/></Link>
            </div>
            <div className="collapse navbar-collapse"
              id="example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/find"><strong>Find</strong> a Destination</Link></li>
                <li><Link to="/createDestination"><strong>Create</strong> a Destination</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#/profile" className="dropdown-toggle"
                    data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false" id="dropdown">
                      Welcome, {window.CURRENT_USER_INFO.username}
                      <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#/profile">Profile</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="" onClick={this.handleLogout}>Log Out</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  });
}(this));
