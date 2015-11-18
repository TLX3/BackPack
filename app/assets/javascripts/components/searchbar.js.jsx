(function(root) {
  'use strict';
  root.SearchBar = React.createClass({

     getInitialState: function () {
       return {searchText: ""};
     },

     handleButtonClick: function () {
      ApiUtil.fetchDestinationMatches(this.state.searchText);
    },

    handleBarClick: function () {
      ApiUtil.fetchAllTags();
    },

    render: function () {
      return (
      	<div className="row">
          <input type="text" onClick={this.handleBarClick} placeholder="Search Destinations"/>
             <button className="" type="button" onClick={this.handleButtonClick}>Search
             </button>
      	</div>
      );
    }
  });
}(this));
