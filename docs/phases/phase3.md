# Phase 3: UsersEvents and Tags (3 days)

## Rails
### Models
* Tag
* Tagging
* UsersEvents

### Views
* tags/show.json.jbuilder
* users_events/index.json.jbuilder

## Flux
### Views (React Components)
* UsersEventsIndex
  - UsersEventsIndexItem
* UsersEventsShow
* UsersEventsForm
* SearchIndex

### Controllers
* Api::UsersEventsController (create, destroy, index, show, update)

### Stores
* UsersEvents

### Actions
* ApiActions.receiveAllUsersEvents
* ApiActions.receiveSingleUsersEvents
* ApiActions.deleteUsersEvents

### ApiUtil
* ApiUtil.fetchAllUsersEvents
* ApiUtil.fetchSingleUsersEvents
* ApiUtil.createUsersEvents
* ApiUtil.updateUsersEvents
* ApiUtil.destroyUsersEvents

## Gems/Libraries
