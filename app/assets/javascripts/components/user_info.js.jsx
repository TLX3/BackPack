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

      return (
          <div className="row">
              <h3>username</h3>
          <div className="row">
              <h3>Location: </h3>
              <h3>BackPack member since: </h3>
          </div>
          <div className="row">
              <h3>Bio: </h3>
          </div>
          <UserDestinations/>
        </div>
      );
    }
  });
}(this));
