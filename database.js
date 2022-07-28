const mongoose = require("mongoose");
const { deleteOne } = require("./person");
const Person = require("./person");

MONGO_URI =
  "mongodb+srv://fahd:0000@cluster0.pumgywp.mongodb.net/?retryWrites=true&w=majority";

// *************** conecting to mongoDB Atlas    *****************
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected, great !! ");
  })
  .catch((err) => console.log(err));

// ************* create new person document      ***************
// var person = new Person({
//   name: "Fahd",
//   age: 26,
//   favoriteFoods: ["pizza", "loubia"],
// });

// *****************  saving the person document  *****************
// person.save(function (err, data) {
//   if (err) return console.log(err);
//   else {
//     console.log(data);
//   }
// });

// ******************  create several records     ************
// const arrayOfPeople = [
//   { name: "Jack", age: 74, favoriteFoods: ["fish", "couscous"] },
//   { name: "Mahdi", age: 29, favoriteFoods: ["chicken"] },
//   { name: "Charlice", age: 31, favoriteFoods: ["Tacos"] },
// ];

// Person.create(arrayOfPeople).then((data) => {
//   console.log(data);
// });

// ************  Find all the people in the database   ********************
// Person.find()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// *****************     find only one person using food criteria    **************
// Person.findOne({ favoriteFoods: "loubia" }).then((data) => {
//   console.log(data);
// });

//  ***************************   Search the database by id    **************
// Person.findById({ _id: "62e2b059a6c5a2b09e8f2d72" })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ****************************  Perform Classic Updates by Running Find, Edit, then Save    ************
// Person.find(
//   { _id: "62e2ad05d005b17f3f4afcf5" },
//   { $push: { favoriteFoods: "hamburger" } }
// )
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// *******************   Perform New Updates on a Document  *********************
// Person.findOneAndUpdate({ name: "Charlice" }, { age: 20 }, { new: true }).then(
//   (data) => {
//     console.log(data);
//   }
// );

// *******************************     Delete One Document         ********************
// Person.findByIdAndRemove({ _id: "62e2b07df0f2801882d09460" }).then((data) => {
//   console.log(data);
// });

// *******************************     Delete Many Documents with model.remove()      ************
// Person.remove({ name: "Mahdi" }).then((data) => {
//   console.log(data);
// });

// *************************      Chain Search Query    *********************
// Person.find({ favoriteFoods: "loubia" })
//   .sort({ name: 1 })
//   .limit(2)
//   .select("age")
//   .exec((err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
