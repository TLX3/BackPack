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
        default:
          selectedKey = 1;
      }
      return {destination: {},
              selectedKey: selectedKey};
    },
    componentWillMount: function () {
      DestinationStore.addChangeListener(this._onChange);
      ApiUtil.fetchDestinationMatches({getCurrentDestination: this.props.params.id});
      this.basePath = "/destinations/" + this.props.params.id + "/";
    },
    componentWillUnmount: function () {
      DestinationStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
      this.setState({destination: DestinationStore.getCurrentDestination()});
    },
    handleDestinationNavbarSelect: function (selectedKey, path) {
      this.setState({selectedKey: selectedKey});
      this.props.history.pushState(null, this.basePath + path);
     },
     render: function () {
       return (
         <div className="container">
           <DestinationNavbar selectedKey={this.state.selectedKey} name={this.state.destination.name} handleSelect={this.handleDestinationNavbarSelect}/>
           <div className="row">
              <div className="col-md-4">
                <DestinationSidebar />
              </div>
              <div className="col-md-8">
                {this.props.children}
               </div>
           </div>
         </div>
      );
     }
   });
 }(this));
