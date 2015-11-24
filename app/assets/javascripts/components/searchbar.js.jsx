(function(root) {
  'use strict';
  root.SearchBar = React.createClass({
    getInitialState: function () {
      return {searchText: ""};
    },
    handleKeyPress: function (e) {
      var query = e.target.value ? {searchText: e.target.value} : null;
      ApiUtil.fetchDestinationMatches(query);
    },
    handleBarClick: function () {
      ApiUtil.fetchAllTags();
    },
    render: function () {
      return (
      	<div className="row">
          <div className="col-md-6">
              <input type="text" className="form-control input-md"
                     onChange={this.handleKeyPress}
                     placeholder="All Destinations"/>
          </div>
      	</div>
      );
    }
  });
}(this));
