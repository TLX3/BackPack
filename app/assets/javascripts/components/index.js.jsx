(function(root) {
  'use strict';
  root.Index = React.createClass({
    render: function () {
      return (
        <div className="container">
          <Navbar/>
          <SearchBar/>
          <Destination/>
          <Tag/>
        </div>
      );
    }
  });
}(this));
