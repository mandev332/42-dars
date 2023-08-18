import { address, car, user } from "../models/index.js";

export default {
    GET: async (req, res, next) => {
        try {
            res.send(
                await car.findAll({
                    include: {
                        model: user,
                        // include: user,
                        // attributes: ["username", "age", "gender"],
                    },
                })
            );
        } catch (error) {
            console.log(error);
        }
    },
    GETID: async (req, res) => {
        try {
            res.send(
                await car.findOne({
                    where: { car_id: req.params.id },
                })
            );
        } catch (error) {
            console.log(error);
        }
    },
    DELETE: async (req, res) => {
        try {
            res.send(await fetch(query.DELETE, req.params.id));
        } catch (error) {
            console.log(error);
        }
    },
    POST: async (req, res) => {
        try {
            res.send(await car.create(req.body));
        } catch (error) {
            res.status(429).json({ msg: error.message });
        }
    },
};
