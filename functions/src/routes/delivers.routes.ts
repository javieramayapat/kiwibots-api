const { Router } = require("express");
const DeliversService = require("../services/delivers.service")

const router = Router();

// Instance of my service to occupy
const service = new DeliversService();


router.get("/v1/delivers", async (request, response) => {
    try {
        const delivers = await service.getDelivers();
        response.status(200).json(delivers)

    } catch (error) {
        return response.status(500).send(error)
    }

});

router.get("/v1/delivers/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const deliver = await service.getDeliverById(id);
        response.status(200).json(deliver)

    } catch (error) {
        return response.status(500).send(error)
    }
})


module.exports = router;