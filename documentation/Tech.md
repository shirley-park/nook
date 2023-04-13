# Tech

## Deets

This project will be built on React, Redux, Knex, and (possibly) Auth0.

---
## MVP

### Server side

#### database
- database setup - x2 tables: project_room and elements
    - project_room table (id, heading, description, image_gallery)
    - elements table (id, item_name, make, description, element_tag, shop, colour)
- make seeds for each table
- db functions (getAllProjectRooms, getAllElements, add projects, add elements)

#### router
- get Projects
- get Elements

----
### Client side

#### reducers
- Projects Reducer
- Elements Reducer
- index (to combine)

#### actions
- projectActions 
- simple actions: GET_PROJECTS, ADD_PROJECT
- thunks: fetchAllProjects, addProject

#### apis
- project.api (fetch, add, delete, update functions)
- elements.api (fetch, add, delete, update functions)

#### components
- Nav.tsx 
- Home.tsx (view of all projects: grid view of user's home improvement projects. One cell per room/project)
- Project.tsx (contains insp gallery followed by list of items required for project)
- Elements.tsx (list of all the fittings/furniture/appliances required for the project)

### CSS
- styles.css (simple and clean lines, insp by John Pawson, Vincent Van Duysen sites, giving clean and calm space to plan project).

---
## Stretch

- Auth0 authentication to login
- smooth page transition animations
- delete projects in the db and redux
- update projects in the db and redux
- delete elements in the db and redux
- update elements in the db and redux

---
## Gitflow
There will be two branches (server and client) and I create sub-branches under each for the specific feature I am working on.