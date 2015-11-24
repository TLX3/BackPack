(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
  root.UserProfilePicture = React.createClass({
    getInitialState: function () {
      return {user: UserStore.getCurrentUser()};
    },
    _onChange: function () {
      this.setState({user: UserStore.getCurrentUser()});
    },
    componentWillMount: function () {
      UserStore.addCurrentUserReceivedListener(this._onChange);
      ApiUtil.fetchCurrentUser();
    },
    componentWillUnmount: function () {
      UserStore.removeCurrentUserReceivedListener(this._onChange);
    },
    render: function () {
    var publicId = "blank-profile_ox71we";
     if (typeof this.state.user !== "undefined") {
       publicId = this.state.user.picture_url;
     }
     var url = $.cloudinary.url(publicId,
                               { width: 100, height: 150, crop: 'fill',
                                 radius: 20});
      return (
        <div className="col-md-6">
            <h3>Profile Picture</h3>
            <img src={url} alt="Profile Pic"/>
            <div className="row">
              <Link to="profile/editProfilePic">Edit Profile Pic</Link>
            </div>
        </div>
      );
    }
  });
}(this));
