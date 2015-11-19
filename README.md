# BackPack

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

BackPack is a web application inspired by Meetup built using Ruby on Rails
and React.js. Meetup allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [X] Create an account
- [X] Log in / Log out
- [X] Create User Profile
- [ ] Message other Users
- [ ] Create, edit, delete, join, and leave destinations
- [ ] Tag groups and users with multiple tags
- [X] Show destinations
- [ ] Find destinations
- [ ] Apply styling using Bootstrap

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Models, and JSON API (1 day)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for the models.

[Details][phase-one]

### Phase 2: Flux Architecture and Destination, User, Groups, and Tags CRUD (3 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, an corresponding stores will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the resources. By the end of phase 2, Groups and Users can be
tagged with multiple tags. Users can bring up Destinations in a `SearchIndex`
view.

[Details][phase-two]

### Phase 3: User Profiles, Destination Profiles, and User Messaging  (3 days)
Phase 3 will allow users to build and edit their profile. Also, users can build and edit their destination profile. Once this phase is complete, users can view a destination's description, location, groups, and picture. Users will also be able to create and join a destination


[Details][phase-three]

### Phase 4: Allow Complex Styling (2 day)

Using quill.js, allow for complex styling of Destinations.

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (1 day)

Phase 5 I will add styling flourishes and make modals out of some elements .

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Pagination / infinite scroll for Destinations Index
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
