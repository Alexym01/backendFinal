const {Campeon} = require("../models/leagueoflegends")
const {validationResult} = require("express-validator")
const axios = require('axios');

const controllers = {
    crearCampeon: async (req, res) => {
        try {
            const item = new Campeon(req.body)
            await item.save()
            res.status(201).json({item})
        } catch (error) {
            res.status(501).json({error})
        }
    },
    verTodos: async (req, res) => {
        const items = await Campeon.find()
        res.status(200).json({items})
    },
    verCampeon: async (req, res) => {
        const item = await Campeon.findById(req.params.id)
        res.status(200).json({item})
    },
    editarCampeon: async (req, res) => {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                await Campeon.findByIdAndUpdate(req.params.id, req.body)
                res.status(201).json({msg: "Se actualizo el campeon"})
            } else {
                res.status(501).json({err})
            }
        } catch (error) {
            res.status(501).json({error})
        }
    },
    eliminarCampeon: async (req, res) => {
        const item = await Campeon.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "El siguiente campeon fue eliminado: ", item})
    },
    verHora: async (req,res) => {
        try {
            const response = await axios.get('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires');
            const unixtimestamp = response.data.unixtime;
            const date = new Date (unixtimestamp * 1000);
            const data = date.toLocaleTimeString("it-IT");

            res.status(200).json({"hora": `${data}`});
        } catch (error) {
            res.status(501).send({ msg: "Hubo un error al intentar conseguir la hora" });
        }
    }
}

module.exports = controllers;