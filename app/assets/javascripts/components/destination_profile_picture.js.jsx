(function(root) {
  'use strict';
  root.DestinationProfilePicture = React.createClass({
    render: function () {
      var publicId = "destination-default_cyldui";
      if (this.props.picture_url) {
        publicId = this.props.picture_url;
      }
      var url = $.cloudinary.url(publicId,
                                { width: 100, height: 150, crop: 'fill',
                                  radius: 20});
      return (
        <RB.Row>
          <img src="" alt="Profile Pic"/>
        </RB.Row>
      );
    }
  });
}(this));
