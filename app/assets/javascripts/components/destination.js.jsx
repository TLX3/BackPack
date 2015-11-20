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
      var src = "http://cdni.condenast.co.uk/646x430/d_f/FregateIslandPrivate_cnt_12_646x430.jpg";
      var finished = [];
      var destinationsForRow = [];
      _.each(this.state.destinations, function (destination, idx) {
        destinationsForRow.push(
          <div key={idx} className="col-md-4">
              <img src={src}
                 height="100px"></img>
               <h4>{destination.title}</h4>
          </div>
        );
        if ((idx + 1) % 3 === 0 || idx === this.state.destinations.length - 1) {
          finished.push(
            <div key={idx} className="row">
              {destinationsForRow}
            </div>
          );
          destinationsForRow = [];
        }
      }, this);
      return (
        <div>
        <h3>Destinations:</h3>
        {finished}
        </div>
      );
    }
  });
}(this));
