(function(root) {
  'use strict';
  root.UserProfile = React.createClass({
    render: function () {
      return (
        <div className="row">
          <UserInfo/>
          <div className="row">
            <UserProfilePicture/>
          </div>
          <div className="row">
            <UserTags/>
          </div>
        </div>
      );
    }
  });
}(this));
