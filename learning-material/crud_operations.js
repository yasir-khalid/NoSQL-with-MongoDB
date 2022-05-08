// CRUD operations (C: CREATE, R: READ, U: UPDATE, D: DELETE)
/*
CREATE:
db.<colection>.insertOne(data, options)
// db.<collection>.insertOne({json}, options)
// db.<collection>.insertMany(data, options) -- to insert more than 1 document at a time
*/

/*
READ
// db.<collection>.find(filter, options) : finds all matching documents
    -- filters allow to narrow down data being retrieved
// db.<collection>.findOne(filter, options) : fetches the 1st matching document and retrieves it
*/

/*
UPDATE
db.<collection>.updateOne(filter, data, options)
db.<collection>.updateMany(filter, data, options)
db.<collection>.replaceOne(filter, data, options)
*/

/*
DELETE
db.<collection>.deleteOne(filter)
db.<collection>.deleteMany(filter)
*/