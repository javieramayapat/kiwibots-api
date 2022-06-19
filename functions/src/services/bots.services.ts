const { Router } = require("express");

const admin = require("firebase-admin");
const db = admin.firestore();


class BotsService {

    constructor(
        public state: string,
        public lat: number,
        public lon: number,
        public zone_id: string
    ) { }


    getBotsByZoneId = async (zone_id: string) => {

        const botsReference = db.collection('bots').where('zone_id', '==', zone_id);
        const documentSnapshop = await botsReference.get();
        const bots = documentSnapshop.docs.map(doc => doc.data());
        console.log(bots)

        return bots

    }

}

module.exports = BotsService;