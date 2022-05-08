# shows all databases in mongoDB
show dbs

/*
switches to a listed database
if DB is not present, it switches to the databases,
but does not create it.. a database only gets created
once you fill it in with docuemnts
*/
use lesson1 // switches to <lesson1> db

show dbs //list all dbs

db.getName() // name of currently selected database
db.getCollectionNames() // gets all collections within the selected database
// to reference a selected database, use "db" and chain commands
// db.<collection>.insertOne(<json document>)
// references the selected db and opens up the collection within that
// if a collection doesnot exist, it creates one
use lesson1
db.studentDetails.insertOne(
    {
        "name": "Hamza Khalid",
        "age": 30,
        "student_id": 181379,
        "university": "NUST"
    }
)

// returns all documents in the collection
// db.<collection>.find()
db.studentDetails.find()
// chain in the .pretty() commands to prettify the json object
db.studentDetails.find().pretty()

// gets you count of documents in the <collection>
db.<collection>.count(query, options) // .countDocuments() is the latest chain comment
// .count() is depreciated
