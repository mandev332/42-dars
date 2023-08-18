import car from "./carsModel.js";
import user from "./userModel.js";
import address from "./addressModel.js";

// car.hasOne(user, { foreignKey: "car_id" });
// user.belongsTo(car, { foreignKey: "car_id" });
// user.hasOne(car, { foreignKey: "user_id" });
// car.belongsTo(user, { foreignKey: "user_id" });
car.belongsToMany(user, { through: address });
user.belongsToMany(car, { through: address });

// await user.sync({
//   force: true,
// });
// await car.sync({
//   force: true,
// });
// await address.sync({
//   force: true,
// });

// await user.bulkCreate([
//     {
//         username: "Alisher",
//         age: 25,
//         gender: "male",
//         car_id: 4,
//     },
//     {
//         username: "Botir",
//         age: 21,
//         gender: "male",
//         car_id: 2,
//     },
//     {
//         username: "Malika",
//         age: 20,
//         gender: "female",
//         car_id: 3,
//     },
//     {
//         username: "Lola",
//         age: 23,
//         gender: "female",
//         car_id: 1,
//     },
// ]);

// await car.bulkCreate([
//     {
//         model: "Malibu",
//         year: 2020,
//         color: "red",
//         user_id: 2,
//     },
//     {
//         model: "Matiz",
//         year: 2011,
//         color: "black",
//         user_id: 3,
//     },
//     {
//         model: "Kia",
//         year: 2023,
//         color: "white",
//         user_id: 1,
//     },
//     {
//         model: "Hyundai",
//         year: 2019,
//         color: "blue",
//         user_id: 1,
//     },
// ]);

// await address.bulkCreate([
//     {
//         name: "Tashkent",
//         CarCarId: 2,
//         UserUserId: 1,
//     },
//     {
//         name: "Buxoro",
//         CarCarId: 3,
//         UserUserId: 2,
//     },
//     {
//         name: "Navoiy",
//         CarCarId: 3,
//         UserUserId: 4,
//     },
//     {
//         name: "Jizzax",
//         CarCarId: 4,
//         UserUserId: 3,
//     },
// ]);

export { user, car, address };
