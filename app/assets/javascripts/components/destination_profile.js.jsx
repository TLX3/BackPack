 (function(root) {
   'use strict';
   root.DestinationProfile = React.createClass({
    getInitialState: function () {
      var selectedIdx = this.props.location.pathname.lastIndexOf("/");
      var selectedName = this.props.location.pathname.substr(selectedIdx + 1);
      var selectedKey = 1;
      switch (selectedName) {
        case "members":
          selectedKey = 2;
          break;
        case "photos":
          selectedKey = 3;
        break;
      }
      return {destination: {},
              selectedKey: selectedKey};
    },
    componentWillMount: function () {
      DestinationStore.addChangeListener(this._onChange);
      MessageStore.addChangeListener(this._onReceiveMessage);
      ApiUtil.fetchDestinationMatches({getCurrentDestination: this.props.params.id});
      this.basePath = "/destinations/" + this.props.params.id + "/";
    },
    componentWillUnmount: function () {
      DestinationStore.removeChangeListener(this._onChange);
      MessageStore.removeChangeListener(this._onReceiveMessage);
    },
     componentWillReceiveProps: function (nextProps) {
      this.state.selectedKey = 1;
      ApiUtil.fetchDestinationMatches({getCurrentDestination: nextProps.params.id});
      this.basePath = "/destinations/" + nextProps.params.id + "/";
    },
    _onChange: function () {
      this.setState({destination: DestinationStore.getCurrentDestination()});
    },
    _onReceiveMessage: function() {
      var message = MessageStore.getMessage();
      if (message.status < 400) {
        this.handleDestinationNavbarSelect(1, "home");
      }
    },
    handleDestinationNavbarSelect: function (selectedKey, path) {
      if(path != "join"){
        this.setState({selectedKey: selectedKey});
        this.props.history.pushState(null, this.basePath + path);
      }
      else{
        ApiUtil.joinDestination({id: this.props.params.id});
      }
     },
     render: function () {
       var rendered = <RB.Grid></RB.Grid>;
      if (this.state.destination.title) {
        rendered = (
          <RB.Grid>
            <DestinationNavbar selectedKey={this.state.selectedKey}
                               name={this.state.destination.title}
                               handleSelect={this.handleDestinationNavbarSelect}/>
            <RB.Row>
              <RB.Col md={4}>
                <DestinationSidebar {...this.state.destination}/>
              </RB.Col>
              <RB.Col md={8}>
                {this.props.children}
              </RB.Col>
            </RB.Row>
          </RB.Grid>
        );
      }
      return rendered;
     }
   });
 }(this));
