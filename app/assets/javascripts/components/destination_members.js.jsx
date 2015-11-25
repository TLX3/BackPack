(function(root) {
  'use strict';
  root.DestinationMembers = React.createClass({
     getInitialState: function () {
      return {members: []};
    },
    componentDidMount: function () {
      UserStore.addCurrentUserReceivedListener(this._onChange);
      ApiUtil.fetchAllUsers({destination_id: this.props.params.id});
    },
    componentWillUnmount: function () {
      UserStore.removeCurrentUserReceivedListener(this._onChange);
    },
    _onChange: function () {
      this.setState({members: UserStore.all()});
    },
    render: function () {
      var rendered = "",
          memberList = [];
      _.each(this.state.members, function (member, idx) {
        memberList.push(<li key={idx}>{member.username}</li>);
      });
      if (memberList.length > 0) {
        rendered = <ul>{memberList}</ul>;
      }
     return (
        <RB.Grid>
          {rendered}
        </RB.Grid>
      );
    }
  });
}(this));
