$(function() {
  'use strict';
  var root = document.getElementById('content');
  if (!root) {
    return;
  }
   var Route = ReactRouter.Route;
   var Router = ReactRouter.Router;
   var IndexRoute = ReactRouter.IndexRoute;

   var App = React.createClass({

     render: function () {
         return (
           <div>
             <Navbar/>
             {this.props.children}
           </div>
         );
     }

   });
   var routes = (
     <Route path="/" component={App}>
       <IndexRoute component={Index}/>
       <Route path="find" component={Index}/>
       <Route path="profile" component={UserProfile}/>
       <Route path="profile/edit" component={UserEdit}/>
       <Route path="createDestination" component={CreateDestination}/>
       <Route path="profile/editTags" component={UserEditTags}/>
       <Route path="profile/editProfilePic" component={UserEditProfilePic}/>
         <Route path="destinations/:id" component={DestinationProfile}>
          <IndexRoute component={DestinationHome}/>
          <Route path="members" component={DestinationMembers}/>
          <Route path="photos" component={DestinationPictures}/>
          <Route path="join" component={DestinationJoin}/>
        </Route>
     </Route>
   );
   React.render(<Router>{routes}</Router>, root);
});
