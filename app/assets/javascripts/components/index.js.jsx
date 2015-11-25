(function(root) {
  'use strict';
  root.Index = React.createClass({
    render: function () {
      return (
        <div className="container-fluid">
          <RB.Row>
            <RB.Jumbotron className="jumbotron-main">
              <h2> Welcome, {window.CURRENT_USER_INFO.username}</h2>
              <h1>Ready for your next adventure?</h1>
              <h1>Start the journey today!</h1>
              <h1>Join other travelers!</h1>
            </RB.Jumbotron>
          </RB.Row>
          <RB.Grid className="search-bar">
            <SearchBar/>
          </RB.Grid>
          <Destination/>
        </div>
      );
    }
  });
}(this));
