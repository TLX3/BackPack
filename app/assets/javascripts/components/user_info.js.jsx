(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
  root.UserInfo = React.createClass({
    getInitialState: function () {
      return {user: UserStore.getCurrentUser()};
    },
    _onChange: function () {
      this.setState({user: UserStore.getCurrentUser()});
    },
    componentWillMount: function () {
      UserStore.addCurrentUserReceivedListener(this._onChange);
      ApiUtil.fetchCurrentUser();
      this.notifications = MessageStore.getNotifications();
    },
    componentWillUnmount: function () {
      UserStore.removeCurrentUserReceivedListener(this._onChange);
    },
    render: function () {
      var username = "";
      var bio = "";
      var memberSince = "";
      if (this.state.user) {
        username = this.state.user.username;
        bio = this.state.user.bio;
        memberSince = this.state.user.memberSince;
      }
      var message = "";
      return (
        <div className="col-md-7">
        Notifications:<div><h4>{message}</h4></div>
          <div className="row">
            <div className="col-md-3">
              <h2>{username}</h2>
              <Link to="profile/edit">Edit User</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <h3>BackPack member since: </h3>
              {memberSince}
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <h3>Bio: </h3>
              {bio}
            </div>
          </div>
          <UserDestinations/>
        </div>
      );
    }
  });
}(this));
