(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
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
      var finished = [];
      var destinationsForRow = [];
      _.each(this.state.destinations, function (destination, idx) {
        var publicId = "";
        if (destination.picture_url) {
            publicId = destination.picture_url;
        }
        var url = $.cloudinary.url(publicId,{ width: 350, height: 230,crop: 'fill'});

        destinationsForRow.push(
          <div key={idx} className="col-md-4 with margin">
            <Link to={"destinations/" + destination.id}>
              <img alt={destination.title} src={url} className="focus">
               <h4>{destination.title}</h4>
               Destination at:
               <h5>{destination.location}</h5>
              </img>
            </Link>
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
        <RB.Grid className="destinations">
          {finished}
        </RB.Grid>
      );
    }
  });
}(this));
