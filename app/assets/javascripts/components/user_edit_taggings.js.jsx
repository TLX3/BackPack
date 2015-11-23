(function(root) {
  'use strict';
  var Link = ReactRouter.Link;
  root.UserEditTags = React.createClass({
    getInitialState: function () {
      return {checkedTags: TagStore.all(),checkHappened: false, errors: []};
    },
    componentWillMount: function () {
      TagStore.addChangeListener(this._onChange);
      MessageStore.addChangeListener(this._onReceiveMessage);
      ApiUtil.fetchAllTags({getCurrentUserTags: true});
    },
    componentWillUnmount: function () {
      TagStore.removeChangeListener(this._onChange);
      MessageStore.removeChangeListener(this._onReceiveMessage);
    },
    _onChange: function () {
      this.setState({checkedTags: TagStore.all()});
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
    handleCheckboxClicked: function (e) {
      var clickedTag = {id: parseInt(e.target.value), name: e.target.name};
      var foundTagIdx = _.findIndex(this.state.checkedTags,{id: clickedTag.id});
      if (foundTagIdx < 0) {
        this.state.checkedTags.push(clickedTag);
      } else {
        this.state.checkedTags.splice(foundTagIdx, 1);
      }
      this.setState({checkedTags: this.state.checkedTags});
    },
    handleSubmit: function (e) {
      e.preventDefault();
      var user = {};
      var tag_ids = [""];
      _.each(this.state.checkedTags, function (tag) {
        tag_ids.push(tag.id);
      }, this);
      user.tag_ids = tag_ids;
      ApiUtil.updateCurrentUser(user);
    },
    render: function () {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="row form-group">
            <div className="col-md-offset-3 col-md-6">
              <label>Tags: </label>
              {
                window.TAGS.map(function (tag, idx) {
                  var foundTagIdx = _.findIndex(this.state.checkedTags,{name: tag.name});
                  var isChecked = true;
                  if (foundTagIdx < 0) {
                    isChecked = false;
                  }
                  return (
                    <label key={idx} className="checkbox-inline">
                      <input
                        type="checkbox"
                        name={tag.name}
                        value={tag.id}
                        onChange={this.handleCheckboxClicked}
                        checked={isChecked}>
                          {tag.name}
                      </input>
                    </label>
                  );
                }, this)
              }
            </div>
          </div>

        <div className="row form-group">
          <div className="col-md-offset-3 col-md-2">
            <button type="submit" className="btn btn-default">Update Tags</button>
          </div>
          <div className="col-md-2">
            <Link to="profile" className="btn btn-default">Cancel</Link>
          </div>
        </div>
      </form>

);
    }
  });
}(this));
