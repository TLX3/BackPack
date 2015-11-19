(function(root) {
  'use strict';
  root.UserDestinations = React.createClass({
    getInitialState: function () {
      return {destinations: DestinationStore.all()};
    },
    _onChange: function () {
      this.setState({destinations: DestinationStore.all()});
    },
    componentDidMount: function () {
      DestinationStore.addChangeListener(this._onChange);
      ApiUtil.fetchDestinationMatches({getCurrentUserJoinedDestinations: true});
    },
    componentWillUnmount: function () {
      DestinationStore.removeChangeListener(this._onChange);
    },
    render: function () {
      return (
        <div className="row">
          <div className="col-md-7">
            <h3>Destinations:</h3>
              <ul>
                {
                  this.state.destinations.map(function (destination, idx) {
                    return <li key={idx}>{destination.name}</li>;
                  })
                }
              </ul>
            </div>
        </div>
      );
    }
  });
}(this));
