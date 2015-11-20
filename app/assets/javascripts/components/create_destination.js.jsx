(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
  root.CreateDestination = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
      return {
        title: "",
        description: "",
        location: "",
        cost: ""
      };
    },
    handleSubmit: function (e) {
      e.preventDefault();
      var destination = {};
      destination.title = this.state.title;
      destination.description = this.state.description;
      destination.location = this.state.location;
      destination.cost = this.state.cost;
      ApiUtil.createDestination(destination);
    },
    render: function () {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="row form-group">

            <div className="col-md-offset-3 col-md-6">
              <label>Title: </label>
              <input type="text" className="form-control" valueLink={this.linkState("title")}/>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-offset-3 col-md-6">
              <label>Location:</label>
                <input type="text" className="form-control" valueLink={this.linkState("location")}/>
            </div>
          </div>


          <div className="row form-group">
            <div className="col-md-offset-3 col-md-6">
              <label>Description:</label>
                <input type="text" className="form-control" valueLink={this.linkState("description")}/>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-offset-3 col-md-6">
              <label>Cost:</label>
                <input type="text" className="form-control" valueLink={this.linkState("cost")}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-offset-3 col-md-5">
              <div className="row">
                <button type="submit"
                        className="btn btn-default">
                        Create Destination
                </button>
              </div>
              <div className="col-md-4">
                <Link to="/" className="btn btn-default">Cancel</Link>
              </div>
            </div>
          </div>

        </form>
      );
    }
  });
}(this));
