(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
  root.DestinationInfo = React.createClass({
    getInitialState: function () {
      return {user: {}};
    },
    componentDidMount: function () {
      UserStore.addOrganizerChangeListener(this._onChange);
      ApiUtil.fetchOrganizer({showUserById: this.props.author_id});
    },
    componentWillUnmount: function () {
      UserStore.removeOrganizerChangeListener(this._onChange);
    },
    componentWillReceiveProps: function (nextProps) {
      ApiUtil.fetchOrganizer({showUserById: nextProps.author_id});
    },
    _onChange: function () {
      this.setState({user: UserStore.getOrganizer()});
    },
    render: function () {
   var rendered = <RB.Row></RB.Row>;
      if (this.props.title) {
        rendered = (
          <RB.Row>
            <h4>Location: {this.props.location}</h4>
            <h4>Description: {this.props.description}</h4>
            <h4>Cost: {this.props.cost} </h4>
            <h4>Created: {this.props.created}</h4>
            <h4>Organizer:</h4>
              <Link to={"users/" + this.state.user.id}>
                {this.state.user.username}
              </Link>
          </RB.Row>
        );
      }
      return rendered;
    }
  });
}(this));
