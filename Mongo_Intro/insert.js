// use kapil
db.items.insertMany([{name: "apple",price:123408,rating:5}, {name: "moto",price:16000,rating:3.8,issmall:true}])
db.items.insertOne({name: "Realme6",price:20000,rating:4})
// db.items.find(operator,projections)
db.items.find({price:123408}) //returns item with given price
db.items.find({price:123408},{rating:1}) //returns item with given price , will display only rating
db.items.find({rating:{$gte:3.5}}) //returns item with higher than given rating 
db.items.find({rating:{$gt:4.5},price:123408}) 
db.items.find({rating:{$gt:4.5},price:{$gt:10000}}) 
db.items.find({$or:[{rating:{$gt:3.5}},{price:{$lt:100000}}]})

/**
 gte - greater than equal to
 gt - greater than 
 lt - less than
 , - AND operator
 $or - OR operator
 */