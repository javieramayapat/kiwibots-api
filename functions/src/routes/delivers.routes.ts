const { Router } = require("express");
import {Request, Response } from "express";

import { DeliversService } from "../services/delivers.service";

const router = Router();

// Instance of my service to occupy
const service = new DeliversService();


router.get("/v1/delivers", async (request: Request, response: Response) => {
    try {
        const delivers = await service.getDelivers();
        response.status(200).json(delivers)

    } catch (error) {
        return response.status(500).send(error)
    }

});

router.get("/v1/delivers/:id", async (request: Request, response: Response) => {
    try {
        const id = request.params.id;
        const deliver = await service.getDeliverById(id);
        response.status(200).json(deliver)

    } catch (error) {
        return response.status(500).send(error)
    }
})


module.exports = router;