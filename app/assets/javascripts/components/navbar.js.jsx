(function(root) {
   'use strict';
   root.Navbar = React.createClass({
     handleLogout: function () {
       ApiUtil.logOut();
     },
     render: function () {
       return (
        <nav >
          <div >
            <div >
              <button type="button">
                <span >Toggle nav</span>
              </button>
              <a href="#">BACKPACK LOGO</a>
             </div>
            <div>
              <ul>
                <li><a href="#">Find a Destination</a></li>
                <li><a href="#">Start a Destination</a></li>
              </ul>
              <ul >
                <li >
                  <a href="#">
                      Welcome, User {window.CURRENT_USER_ID}
                      <span></span>
                  </a>
                  <ul >
                  <li><a href="#/profile">Profile</a></li>
                    <li role="separator"></li>
                    <li><a href="#" onClick={this.handleLogout}>Log Out</a></li>
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
