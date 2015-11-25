(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
  root.UserTags = React.createClass({
    getInitialState: function () {
      return {tags: TagStore.all(), message: ""};
    },
    _onChange: function () {
      this.setState({tags: TagStore.all()});
    },
    _onReceiveMessage: function(){
      var receivedMessage = MessageStore.getMessage();
      this.setState({message: receivedMessage.responseJSON});
      ApiUtil.fetchAllTags({getCurrentUserTags: true});
    },
    _removeTag: function(event){
      ApiUtil.removeTag(event.currentTarget.id);
    },
    componentWillMount: function () {
      TagStore.addChangeListener(this._onChange);
      MessageStore.removeChangeListener(this._onReceiveMessage);
      ApiUtil.fetchAllTags({getCurrentUserTags: true});
    },
    componentWillUnmount: function () {
      TagStore.removeChangeListener(this._onChange);
    },
    render: function () {
      var message = "";
      if(this.state.message.length > 0){
        message = <h3>{this.state.message}</h3>;
      }
      return (
        <div className="col-md-6">
          {message}
          <h3>Tags:</h3> <Link to="profile/editTags">Edit Tags</Link>
            {
                this.state.tags.map(function (tag, idx) {
                  return (
                    <OverlayTrigger trigger="click" rootClose placement="left" key={idx}
                     overlay={
                       <Popover title="Destinations with this tag">
                         <Button id={tag.name} onClick={this._removeTag}>
                           Remove Tag <Glyphicon glyph="remove-circle"/>
                         </Button>
                       </Popover>}>
                         <Button bsStyle="default">{tag.name}</Button>
                   </OverlayTrigger>
                 );
                }, this)
              }
        </div>
      );
    }
  });
}(this));
