Extra Effort, as in some stuff I put in out of habit

GET /books
- Returns all books

GET /books/:id
- Returns book by id

POST /books
- Adds given book through request body to database
- Returns id of the book in said database

PATCH /books/:id
- Modifies the a book with data of the request body
- Returns true on success, false if something went wrong

DELETE /books/:id
- Deletes a book by id
- Returns true if a book was deleted, otherwise false (yes i tested this and it does in fact work)

GET /books/seed
- Fills the database with sample books
