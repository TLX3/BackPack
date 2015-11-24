(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
  root.DestinationInfo = React.createClass({
    getInitialState: function () {
      return {user: {}};
    },
    componentDidMount: function () {
      UserStore.addCurrentUserReceivedListener(this._onChange);
      ApiUtil.fetchUser({id: this.props.author_id});
    },
    componentWillUnmount: function () {
      UserStore.removeCurrentUserReceivedListener(this._onChange);
    },
    _onChange: function () {
      this.setState({user: UserStore.getUser()});
    },
    render: function () {
      return (
        <RB.Row>
          <h4>{this.props.location}</h4>
          <h4>Created on: {this.props.created}</h4>
          <h4>Created by:</h4>
            <Link to={"users/" + this.state.user.id}>
              {this.state.user.username}
            </Link>
        </RB.Row>
      );
    }
  });
}(this));
