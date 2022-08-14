// (query,whta to update)
db.items.updateOne({name:"Realme6"},{$set:{price:1}})
db.items.insertOne({name:"Realme6",price:1,rating:3.9})
db.items.updateMany({name:"Realme6"},{$set:{price:1,rating:1}})