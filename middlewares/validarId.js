const {Campeon} = require("../models/leagueoflegends")
const validarId = async (req, res, next) => {
    try {
        const item = await Campeon.findById(req.params.id)
        if (item!==null) {
            next()
        } else {
            res.status(500).json({msg: "El Id es invalido."})
        }
    } catch (error) {
        res.status(500).json({error})
    }

}

module.exports = {validarId}