import { Op, Model, DataTypes } from "sequelize";
const { STRING, INTEGER } = DataTypes;
import { sequelize } from "../utils/sequelize.js";

class Address extends Model {}

const address = Address.init(
    {
        address_id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING(25),
            validate: {
                len: [1, 25],
                notNull: {
                    msg: "Please enter your addressname",
                },
            },
            allowNull: false,
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
        tableName: "address",
        createdAt: true,
        updatedAt: false,
        // deleteAt: 'delete_at'
    }
);

export default address;
