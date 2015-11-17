(function(root) {
  'use strict';
  root.ApiActions = {
    receiveAllDestinations: function (destinations) {
      AppDispatcher.dispatch({
        actionType: DestinationConstants.DESTINATIONS_RECEIVED,
        destinations: destinations
      });
    }
  };
}(this));
