(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
  root.UserEditProfilePic = React.createClass({
    getInitialState: function () {
      return {user: UserStore.getUser(),
              errors: ""};
    },
    componentWillMount: function () {
      UserStore.addCurrentUserReceivedListener(this._onChange);
      MessageStore.addChangeListener(this._onReceiveMessage);
      this.profilePicUrl = "";
    },
    componentWillUnmount: function () {
      UserStore.removeCurrentUserReceivedListener(this._onChange);
      MessageStore.removeChangeListener(this._onReceiveMessage);
    },
    _onChange: function () {
      this.setState({user: UserStore.getUser()});
    },
    _onReceiveMessage: function () {
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
      var user = {};
      user.picture_url = this.profilePicUrl;
      ApiUtil.updateCurrentUser(user);
    },
    render: function () {
      var errorText = "";
      if (this.state.errors.length > 0) {
        errorText = <h3>{this.state.errors.join(", ")}</h3>;
      }
      var publicId ="";
      if (typeof this.state.user !== "undefined") {
        publicId = this.state.user.picture_url || url;
      }
      var url = $.cloudinary.url(publicId,
                                { width: 100, height: 150, crop: 'fill',
                                  radius: 20});
      return (
        <RB.Grid>
        <form onSubmit={this.handleSubmit}>
          <img src={url} alt="Profile Pic"/>
          <div className="row form-group">
            <div className="col-md-offset-2 col-md-3">
              <button className="btn btn-default"
                      onClick={this.handleNewPicUpload}
                      id="uploadWidget">
                        Upload New Profile Picture
              </button>
            </div>
            <div className="col-md-3">
              <button type="submit"
                      className="btn btn-default">
                        Update Profile Picture
              </button>
            </div>
            <div className="col-md-3">
              <Link to="profile" className="btn btn-default">Cancel</Link>
            </div>
          </div>
        </form>
      </RB.Grid>
      );
    }
  });
}(this));
