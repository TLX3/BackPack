(function(root) {
  'use strict';
  root.ApiActions = {
    receiveAllDestinations: function (destinations) {
      AppDispatcher.dispatch({
        actionType: DestinationConstants.DESTINATIONS_RECEIVED,
        destinations: destinations
      });
    },
    receiveAllTags: function (tags) {
      AppDispatcher.dispatch({
        actionType: TagConstants.TAGS_RECEIVED,
        tags: tags
      });
    }
  };
}(this));
