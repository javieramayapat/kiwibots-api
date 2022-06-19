import {Request, Response } from "express";
const { Router } = require("express");
// const BotsService = require("../services/bots.services")
import { BotsService } from "../services/bots.services";

const router = Router();

// Instance of my service to occupy
const service =  new BotsService();

router.get("/v1/bots/:zone_id", async (request: Request, response: Response) => {
    try {
        const zone_id = request.params.zone_id;
        const botsByZone = await service.getBotsByZoneId(zone_id)
        response.status(200).json(botsByZone)

    } catch (error) {
        return response.status(500).send(error)
    }
});


module.exports = router;