## To Do

### Development
- [X] Create repository, import in typescript, react, redux, firebase
- [X] Set up basic redux functionality
- [x] Set up linter, unit testing
- [ ] Install custom console
- [x] Update amputation deserialization portion to not hardcode body parts
- [ ] Broader tests - cross-module

### Milestone 0: Post publically a preview video - proof of concept, stripped MVP
- [x] Import API for pulling data - print into the screen
- [x] Load tshirt + underwear Nikki by default
- [x] Type in item ID to load clothes
- [x] Can delete currently worn items
- - [x] Putting in new item of category = replaces the item
- - - [x] Replace clothes ID
- - - [x] Update amputation data
- - [x] Enforce wearing one item at a time
- - [x] Enforce unable to remove hair when selecting the hair again
- [x] Load in clothes on top of Nikki (locally)
- - [x] Figure out item's depth
- - [x] Figure out item's displacement
- - [x] Load assets
- - [x] Debug: when screen is too narrow, big items are displaced
- [x] Display currently-worn items
- [x] Make Nikki draggable on all browsers
- [x] Load backgrounds
- [x] Search by item name
- [x] Create icon stylesheet, scripts for creating it

### Milestone 1: Automate creating image suit breakdowns
- [x] Shop for options
- [x] Webhosting
- [x] Cloudflare
- [x] Create search function - wear suit on searching up suit
- [x] When resizing screen smaller, update the x coordinates of images
- [x] Hide / delete worn items from the items panel
- [x] Refactor to initialize everything in its own usecase instead of in App.tsx
- [x] Download render button
- [ ] ~~Script for automatically creating suit breakdowns~~
- [x] Set the downloaded file name to be relevant to what is currently on Nikki; when Nikki puts on a new full suit, update the file name
- - [x] Add a small border to the compiled photo
- - [x] Script for adding in background
- [x] Search by ID (with category prefix)

### Milestone 2: Browse clothes, and edit a single character; initial closed beta of only newest suits
- [x] Create clothes selection panel - select items by category
- [x] Update snapshots with height/width info
- [x] Update equipped menu for better UX
- - [x] Adding items shows it up in the equipped panel
- - [x] Update equipped panel to show 3 items per row
- - [x] Add in red check icon to show visible items
- - [x] Small ~~menu~~ button to delete an item
- - [x] Hide / delete worn items from the items panel
- - [x] Button to delete all unworn items
- [x] Update Equipped menu
- - [x] Load all loaded items in Equipped menu
- - [x] New items clicked get loaded, are visible, and are on the equipped menu
- - [x] Sort closet by addition time
- - [x] Toggle to sort by category and addition time
- - [x] ~~Clicking on a suit explodes to the items in the suit~~
- - [x] Move background buttons to background section
- - [x] Move download button to bottom right
- [x] Update search
- - [x] Add filter for: posed items
- - [x] Add filter for: suits
- - [x] Add filter for: nation
- - [x] Add filter for: tag
- - [x] When clicking on other subtype, search with that search term with that subtype
- - [x] Dropdown for order by: ID, name
- - [x] Update data to include 'posed' tag for suits
- [x] Bug: DST skin goes above underwear
- [x] Bug: Volley Lucia, Angelika's Dream amongst others don't have icons loading in search
- [x] When loading multiple items, unhide everything
- [x] Create script for version with current prod clothes
- [x] Display only suits that are visible in Achievements section
- [x] Fix bug where sorting by ID crashes
- [x] New search UI: sort - category - toggle between simple/adv search
- - [x] Move search bars / add toggle
- - [x] Remove menu
- - [x] Tell user what they were searching, add search button
- [x] Make menus interactive
- - [x] Make windows draggable
- - [x] Make windows more transparent when not active
- - [ ] ~~Add icon to minimize windows to the bottom right~~

### Milestone 4: Standard Definition mode
- [x] Load sessions by URL (list of items or a suit id)
- [ ] Create flag for production version
- [ ] Add report menu
- [ ] Clean up Closet
- - [ ] Add background buttons
- - [ ] Update trash icon, confirmation
- - [ ] Update sort toggle
- [ ] Phone Icons
- - [ ] Add image icons
- - [ ] Change background
- - [ ] Generate shortlink
- - [ ] Manual vs autorender
- - [ ] View full image
- - [ ] View full screen
- [ ] Loading
- - [ ] Phone loading indicator
- - [ ] Initial page load indicator
- [ ] Mobile experience
- - [ ] Switch between view and inventory/closet
- - [ ] Add separator between inventory/closet
- [ ] Disclaimer, please don't reuse, etc
- [ ] Rewrite tests
- [ ] Clean up old code
- [ ] Create API to keep keys private

### Milestone 5: Performance increases, additional features, address initial feedback
- [ ] Unit tests for UI
- [ ] Add layering for souls data (lua/manager/clothes_manager.lua)
- [ ] Add shadow support
- [ ] Add tilt support
- [ ] Add animations
- [ ] Obfuscate filenames
- [ ] Obfuscate JSON
- [ ] Upload wardrobe file - load into simulator
- [ ] Sort by color
- [ ] Auto update when the game updates
- [ ] Make windows resizable

### Milestone 6: Assets from other versions
- [ ] Localize UI
- [ ] Update presenters/etc to handle new languages
- [ ] Upload assets

### Milestone 8: Advanced account features - saving, favorites, social
- [ ] Upload wardrobe info to see which items you already own
- [ ] Save designed suits to account
- [ ] Favorite items
- [ ] Publicized most favorited items
- [ ] Social: give users ability to upload styling

### Milestone 9: Advanced simulator
- [ ] Upload custom clothes
- - [ ] Allow custom clothes to be shared on site / users can favorite, save, etc
- [ ] Edit hue/saturation/color of clothes
- [ ] Starry Corridor functions: resize, move, flip, rotate
- [ ] Custom tags