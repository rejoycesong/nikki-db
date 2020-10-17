## To Do

### Development
- [X] Create repository, import in typescript, react, redux, firebase
- [X] Set up basic redux functionality
- [x] Set up linter, unit testing
- [ ] Install custom console
- [ ] Update amputation deserialization portion to not hardcode body parts

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
- [ ] Load in clothes on top of Nikki (locally)
- - [ ] Figure out item's depth
- - [ ] Figure out item's displacement
- - [ ] Load assets
- [ ] Display currently-worn items
- [ ] Make Nikki draggable
- [ ] Load backgrounds
- [ ] Save items on reload (`localStorage`)

### Milestone 1: Beta of newest suits
- [ ] Create clothes selection panel - select items by category
- [ ] Create icon stylesheet, scripts for creating it
- [ ] Undo / Redo
- [ ] Hide / delete worn items from the items panel
- [ ] Selectable background base color (#fff, #000, etc)
- [ ] Host images (assets/icons/backgrounds) on Cloudflare
- [ ] Create beautiful UI: https://www.figma.com/proto/i9XDb7wiSGCd7lIuxlcs8q/Site?node-id=6%3A6
- [ ] Find out how to only upload changed files to API

### Milestone 2: Beta of newest suits + current wardrobe
- [ ] Shrink images hosted on CloudFlare? Invest in ways to lower bandwidth use - perhaps slices of images to prevent theft
- [ ] Upload wardrobe file - load into simulator
- [ ] Create search function - lazy load on stop typing
- [ ] Search by ID (with category prefix)
- [ ] Search by ID (without category prefix)
- [ ] Search by item name
- [ ] Search by suit
- [ ] Undo / Redo
- [ ] Hide / delete worn items from the items panel
- [ ] Hide / delete backgrounds/characters from the layers panel
- [ ] Download button
- [ ] Remove all button

### Milestone 3: Beta of full simulator functionality - make all clothes available
- [ ] Figure out how to provide this public service without screwing over Paper's artists/developers revenue
- [ ] Filters
- - [ ] Sort by new
- - [ ] Sort by rare(? - by LN's sort)
- - [ ] Sort by color
- - [ ] Sort by nation
- - [ ] Sort by tag (default Nikki tags for now)
- - [ ] Sort by posed(?)
- [ ] Auto update when the game uupdates
- [ ] Animations

### Milestone 3.5: Assets from other versions
- [ ] Localize UI
- [ ] Update presenters/etc to handle new languages
- [ ] Upload assets

### Milestone 4: Public beta of mobile functionality / Nikki DB Lite (API v2)
- [ ] Design API to build images without having to load all assets locally
- [ ] Design mobile site

### Milestone 5: Advanced account features - saving, favorites, social
- [ ] Save designed suits to account
- [ ] Favorite items
- [ ] Publicized most favorited items
- [ ] Social: allow people to post their creations for likes/views?

### Milestone 6: Advanced simulator
- [ ] Upload custom clothes
- - [ ] Allow custom clothes to be shared on site / users can favorite, save, etc
- [ ] Edit hue/saturation/color of clothes
- [ ] Starry Corridor functions: resize, move, flip, rotate
- [ ] Custom tags
