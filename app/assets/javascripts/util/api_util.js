(function(root) {
  'use strict';
  root.ApiUtil = {
    fetchAllDestinations: function () {
      $.ajax({
        url: "/api/destinations/",
        type: "GET",
        dataType: "json",
        success: function (destinations) {
          ApiActions.receiveAllDestinations(destinations);
        }
      });
    },
    logOut: function () {
      $.ajax({
        url: "/session/",
        type: "DELETE",
        success: function () {
          window.location = "/";
        }
      });
    }
  };
}(this));
