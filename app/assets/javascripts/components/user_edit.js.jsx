(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
  root.UserEdit = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
      return {username: "", bio: "", errors: []};
    },
    _onChange: function () {
      var user = UserStore.getUser();
      this.setState(
        {
          name: user.username,
          bio: user.bio
        }
      );
    },
    _onReceiveMessage: function () {
      var message = MessageStore.getMessage();
      if (message.status < 400) {
        this.props.history.pushState(null, "/profile");
      }
      else {
        this.setState({errors: message.responseJSON});
      }
    },
    handleSubmit: function (e) {
      e.preventDefault();
      var user = {};
      user.username = this.state.username;
      user.bio = this.state.bio;
      ApiUtil.updateCurrentUser(user);
    },
    componentDidMount: function () {
      UserStore.addCurrentUserReceivedListener(this._onChange);
      MessageStore.addChangeListener(this._onReceiveMessage);
      ApiUtil.fetchCurrentUser();
    },
    componentWillUnmount: function () {
      UserStore.removeCurrentUserReceivedListener(this._onChange);
      MessageStore.removeChangeListener(this._onReceiveMessage);
    },
    render: function () {
      return (
        <RB.Grid>
        <form onSubmit={this.handleSubmit}>
          <div className="row form-group">
            <div className="col-md-offset-3 col-md-6">
              <label>Username: </label>
              <input type="text" className="form-control"
                     valueLink={this.linkState("username")}/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-offset-3 col-md-6">
              <label>Bio: </label>
              <input type="text" className="form-control"
                     valueLink={this.linkState("bio")}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-3 col-md-5">
              <div className="row">
                <button type="submit" className="btn btn-default">Update User</button>
              </div>
              <div className="col-md-4">
               <Link to="profile" className="btn btn-default">Cancel</Link>
              </div>
            </div>
          </div>
        </form>
      </RB.Grid>
      );
    }
  });
}(this));
