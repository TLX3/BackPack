(function(root) {
  'use strict';
  root.UserInfo = React.createClass({
    getInitialState: function () {
      return {user: UserStore.getCurrentUser()};
    },
    _onChange: function () {
      this.setState({user: UserStore.getCurrentUser()});
    },
    componentDidMount: function () {
      UserStore.addCurrentUserReceivedListener(this._onChange);
      ApiUtil.fetchCurrentUser();
    },
    componentWillUnmount: function () {
      UserStore.removeCurrentUserReceivedListener(this._onChange);
    },
    render: function () {
      var username = "";
      var bio = "";
      var memberSince = "";
      if (this.state.user) {
        name = this.state.user.name;
        bio = this.state.user.bio;
        memberSince = this.state.user.created_at;
      }
      return (
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-3">
              <h2>{username}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <h3>CompeteUp member since: </h3>
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
