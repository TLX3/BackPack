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
    componentWillMount: function () {
       MessageStore.addChangeListener(this._onReceiveMessage);
       this.profilePicUrl = "";
     },
     componentWillUnmount: function () {
       MessageStore.removeChangeListener(this._onReceiveMessage);
     },
     _onReceiveMessage: function(){
      var message = MessageStore.getMessage();
      if (message.status < 400) {
        this.props.history.pushState(null, "/profile");
      }
      else {
        this.setState({errors: message.responseJSON});
      }
     },
     handleNewPicUpload: function (e) {
       e.preventDefault();
       var that = this;
       cloudinary.openUploadWidget({ cloud_name: 'dbgfyqa1e',
                                     upload_preset: 'm50nybft'},
         function(error, result) {
           if (result) {
             var $widget = $("#uploadWidget");
             $widget.text("Upload Successful");
             $widget.append("<p>" + result[0].original_filename + "</p>");
             that.profilePicUrl = result[0].public_id;
           }
         }
       );
     },
    handleSubmit: function (e) {
      e.preventDefault();
      var destination = {};
      destination.title = this.state.title;
      destination.description = this.state.description;
      destination.location = this.state.location;
      destination.cost = this.state.cost;
      destination.picture_url = this.profilePicUrl;
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
                <textarea className="form-control" valueLink={this.linkState("description")}></textarea>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-offset-3 col-md-6">
              <label>Cost:</label>
                <input type="text" className="form-control" valueLink={this.linkState("cost")}/>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-mid-offset-3 col-md-6">
              <button className="btn btn-default" onClick={this.handleNewPicUpload} id="uploadWidget">
                Upload New Profile Pic
              </button>
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
