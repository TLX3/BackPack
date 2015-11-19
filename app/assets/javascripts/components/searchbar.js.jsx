(function(root) {
  'use strict';
  root.SearchBar = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
      return {searchText: ""};
    },
    handleButtonClick: function () {
      ApiUtil.fetchDestinationMatches({searchText: this.state.searchText});
    },
    handleBarClick: function () {
      ApiUtil.fetchAllTags();
    },
    render: function () {
      return (
      	<div className="row">
          <div className="col-md-6">
            <div className="input-group col-md-12">
              <input type="text" className="form-control input-md"
                     valueLink={this.linkState("searchText")}
                     onClick={this.handleBarClick}
                     placeholder="All Destinations"/>
              <div className="input-group-btn">
                <button className="btn btn-info btn-md" type="button"
                        onClick={this.handleButtonClick}> Search
                </button>
              </div>
            </div>
          </div>
      	</div>
      );
    }
  });
}(this));
