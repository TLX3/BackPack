(function(root) {
  'use strict';
  root.Tag = React.createClass({
    getInitialState: function () {
      return {tags: TagStore.all()};
    },
    _onChange: function () {
      this.setState({tags: TagStore.all()});
    },
    componentDidMount: function () {
      TagStore.addChangeListener(this._onChange);
      ApiUtil.fetchAllTags({fetchNone: true});
    },
    componentWillUnmount: function () {
      TagStore.removeChangeListener(this._onChange);
    },
    render: function () {
      return (
        <div>
          <h1>Tags</h1>
          <ul>
            {
              this.state.tags.map(function (tag, idx) {
                return <li key={idx}>{tag.name}</li>;
              })
            }
          </ul>
        </div>
      );
    }
  });
}(this));
