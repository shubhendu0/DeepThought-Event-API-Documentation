# DeepThought-Event-API-Documentation
## API Documentation Link - https://documenter.getpostman.com/view/22370570/2s93m4ZPT6

### Get Event by ID
```
GET /api/v3/app/events?id=:event_id
```
This GET method returns an event that matches its unique ID.
 
### Get Latest Events
```
GET /api/v3/app/event?type=latest&limit=5&page=1
```
This GET method returns events based on recency, page number and limit of events per page.

### Create Event
```
POST /api/v3/app/events
```
This POST method will add a new event in the database and return the unique ID of the event. Requires the following payload parameters:
- `name`: Name of the event
- `tagline`: A proper tag-line for the event
- `schedule`: Date and time of the event
- `description`: Description of the event
- `moderator`: User who is hosting the event
- `category`: Category of the event
- `sub_category`: Subcategory of the event
- `rigor_rank`: Integer value representing the rigor level of the event
- `files[image]`: Image file for the event (file upload)

### Update Event
```
PUT /api/v3/app/events/:id
```
This PUT method will update the event that matches its unique ID.

### Delete Event
```
DELETE /api/v3/app/events/:id
```
This DELETE method deletes the event that matches its unique ID.

#### Event Object Data Model
- `type`: "event"
- `uid`: User ID (integer)
- `name`: Name of the event (string)
- `tagline`: A proper tag-line for the event (string)
- `schedule`: Date and time of the event (timestamp)
- `description`: Description of the event (string)
- `files[image]`: Image file for the event (file upload)
- `moderator`: User who is hosting the event (string)
- `category`: Category of the event (string)
- `sub_category`: Subcategory of the event (string)
- `rigor_rank`: Integer value representing the rigor level of the event
- `attendees`: Array of user IDs who are attending the event
