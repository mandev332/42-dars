import { address, car, user } from "../models/index.js";

export default {
    GET: async (req, res, next) => {
        try {
            res.send(
                await user.findAll({
                    include: {
                        model: car,
                        // include: car,
                    },
                })
            );
        } catch (error) {
            console.log(error);
        }
    },
    ADDRESSGET: async (req, res, next) => {
        try {
            res.send(await address.findAll({}));
        } catch (error) {
            console.log(error);
        }
    },
    GETID: async (req, res) => {
        try {
            res.send(
                await user.findOne({
                    where: { user_id: req.params.id },
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
            res.send(await user.create(req.body));
        } catch (error) {
            res.status(429).json({ msg: error.message });
        }
    },
};
