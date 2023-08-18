import { Op, Model, DataTypes } from "sequelize";
const { STRING, INTEGER, BOOLEAN } = DataTypes;
import { sequelize } from "../utils/sequelize.js";

class Cars extends Model {}

const car = Cars.init(
    {
        car_id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        model: {
            type: STRING(25),
            validate: {
                len: [1, 25],
                notNull: {
                    msg: "Please enter your carname",
                },
            },
            allowNull: false,
        },
        year: {
            type: INTEGER,
            allowNull: false,
            validate: {
                max: 2000,
                min: 2023,
                notNull: {
                    msg: "Please enter car year",
                },
            },
        },
        color: {
            type: STRING(10),
            defaultValue: "black",
        },
        // user_id: {
        //     type: INTEGER,
        //     references: {
        //         model: "user",
        //         key: "user_id",
        //     },
        // },
    },
    {
        sequelize,
        tableName: "cars",
        createdAt: true,
        updatedAt: false,
        // deleteAt: 'delete_at'
    }
);

export default car;
