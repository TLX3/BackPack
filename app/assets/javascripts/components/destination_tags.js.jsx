(function(root) {
  'use strict';
  root.DestinationTags = React.createClass({
    getInitialState: function () {
      return {tags: TagStore.all()};
    },
    componentDidMount: function () {
      TagStore.addChangeListener(this._onChange);
      ApiUtil.fetchAllTags({getCurrentDestinationTags: this.props.id});
    },
    componentWillUnmount: function () {
      TagStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
      this.setState({tags: TagStore.all()});
    },
    render: function () {
      return (
        <RB.Row>
          <h4>Destination Tags:</h4>
            <RB.Col md={12}>
              {
                this.state.tags.map(function (tag, idx){
                  return (
                    <RB.Button key={idx} bsStyle="default">{tag.name}</RB.Button>
                  );
                })
              }
            </RB.Col>
        </RB.Row>
      );
    }
  });
}(this));
