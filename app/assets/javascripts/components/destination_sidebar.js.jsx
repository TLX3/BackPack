(function(root) {
  'use strict';
  root.DestinationSidebar = React.createClass({
    render: function() {
      return (
             <RB.Grid>
               <DestinationProfilePicture profile_pic_url={this.props.picture_url}/>
               <DestinationInfo {...this.props}/>
               <DestinationTags id={this.props.id}/>
             </RB.Grid>
           );
         }
  });
}(this));
