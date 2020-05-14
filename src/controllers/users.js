import { user } from "../models/"
export const usersPage = async (req, res) => {
    try {
        const data = await user.findAll();
        res.status(200).send({ users: data });
    } catch (err) {
        res.status(500).send({ error: err.stack });
    }
};
