(function(root) {
  'use strict';
  root.Destination = React.createClass({
    getInitialState: function () {
      return {destinations: DestinationStore.all()};
    },
    _onChange: function () {
      this.setState({destinations: DestinationStore.all()});
    },
    componentDidMount: function () {
      DestinationStore.addChangeListener(this._onChange);
      ApiUtil.fetchDestinationMatches();
     },
    componentWillUnmount: function () {
      DestinationStore.removeChangeListener(this._onChange);
    },
    render: function () {
      return (
        <div>
        <h3>Destination:</h3>
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
