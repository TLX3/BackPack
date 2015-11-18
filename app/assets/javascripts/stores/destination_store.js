(function(root) {
  'use strict';
  var _destinations = [];
  var CHANGED_EVENT = "CHANGED_EVENT";

  var resetDestinations = function (destinations) {
    _destinations = destinations;
  };

  root.DestinationStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _destinations.slice(0);
    },
    addChangeListener: function (callback) {
      DestinationStore.on(CHANGED_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      DestinationStore.removeListener(CHANGED_EVENT, callback);
    },
    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case DestinationConstants.DESTINATIONS_RECEIVED:
          resetDestinations(payload.destinations);
          DestinationStore.emit(CHANGED_EVENT);
          break;
      }
    })
  });
}(this));
