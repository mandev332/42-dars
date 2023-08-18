import { Op, Model, DataTypes } from "sequelize";
const { STRING, INTEGER, BOOLEAN } = DataTypes;
import { sequelize } from "../utils/sequelize.js";
import car from "./carsModel.js";

class Users extends Model {}
const user = Users.init(
    {
        user_id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: STRING(25),
            validate: {
                len: [3, 25],
                notNull: {
                    msg: "Please enter your username",
                },
            },
            allowNull: false,
        },
        age: {
            type: INTEGER,
            allowNull: false,
            validate: {
                max: 90,
                min: 15,
                notNull: {
                    msg: "Please enter your age",
                },
            },
        },
        gender: {
            type: STRING(10),
            defaultValue: "male",
            validate: {
                set(value) {
                    if (!["male", "famale"].includes(value))
                        throw new Error("Only you can send  male or female!");
                },
            },
        },
    },
    {
        sequelize,
        tableName: "users",
        createdAt: true,
        updatedAt: false,
        // deleteAt: 'delete_at'
    }
);

export default user;
