(function(root) {
  'use strict';
  root.UserProfile = React.createClass({
    render: function () {
      return (
        <div className="row">
          <UserInfo/>
          <UserTags/>
        </div>
      );
    }
  });
}(this));
