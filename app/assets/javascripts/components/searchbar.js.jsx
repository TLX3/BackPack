(function(root) {
  'use strict';
  root.SearchBar = React.createClass({
    getInitialState: function () {
      return {searchText: "", searchGlyphShow: true};
    },
    handleKeyPress: function (e) {
      var query = e.target.value ? {searchText: e.target.value} : null;
      ApiUtil.fetchDestinationMatches(query);
    },
    handleBarClick: function () {
      ApiUtil.fetchAllTags();
    },
    render: function () {
      var searchGlyph = <RB.Glyphicon glyph="search"/>;
      return (
      	<RB.Row md={6}>
          <RB.Col md={6}>
              <RB.Input type="text" onChange={this.handleKeyPress} placeholder="All Destinations" standalone>
              </RB.Input>
              {searchGlyph}
          </RB.Col>
          <RB.Col md={6}>
            <RB.Row>
              <RB.Col md={4} mdOffset={2}>
                <h6>Search by:</h6>
              </RB.Col>
              <RB.Col md={6}>
                <RB.Input
                  type="select"
                  placeholder="title"
                  standalone>
                    <option value="title">Title</option>
                    <option value="tag">Tag</option>
                </RB.Input>
              </RB.Col>
            </RB.Row>
          </RB.Col>
      	</RB.Row>
      );
    }
  });
}(this));
