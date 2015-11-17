(function(root) {
  'use strict';
  root.Destination = React.createClass({
    getInitialState: function () {
      return {competitions: DestinationStore.all()};
    },
    _onChange: function () {
      this.setState({destinations: DestinationStore.all()});
    },
    componentDidMount: function () {
      debugger;
      DestinationStore.addChangeListener(this._onChange);
      ApiUtil.fetchAllDestinations();
     },
    componentWillUnmount: function () {
      DestinationStore.removeChangeListener(this._onChange);
    },
    render: function () {
      return (
        <div>
          <ul>
             {
              this.state.destinations.map(function (destination, idx) {
                return <li key={idx}>{destination.title}</li>;
              })
            }
          </ul>
        </div>
      );
    }
  });
}(this));
