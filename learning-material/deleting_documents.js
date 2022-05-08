// lets first insert some data into your selected DB [db.getName()]
db.flightData.insertMany([
    {
      "departureAirport": "MUC",
      "arrivalAirport": "SFO",
      "aircraft": "Airbus A380",
      "distance": 12000,
      "intercontinental": true
    },
    {
      "departureAirport": "LHR",
      "arrivalAirport": "TXL",
      "aircraft": "Airbus A320",
      "distance": 950,
      "intercontinental": false
    }
  ]
)
// adding some custom data for upcoming queries
db.flightData.insertMany([
    {
        _id: "txl-lhr-1",
        departureAirport: 'TXL',
        arrivalAirport: 'LHR'
    },
    {
        departureAirport: 'TXL',
        arrivalAirport: 'LHR'
    }
]
)

// checking if all documents are there
db.flightData.find()

// deleting stuff
db.flightData.deleteOne({departureAirport: 'TXL'}) //deletes the first instance of document found under this condition