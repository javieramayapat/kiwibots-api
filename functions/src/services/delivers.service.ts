const { Router } = require("express");

const admin = require("firebase-admin");
const db = admin.firestore();


class DeliversService {

    constructor(
        public state: string,
        public lat: number,
        public lon: number,
        public zone_id: string
    ) { }


    getDelivers = async () => {

        const deliversReference = db.collection('bots');
        const documentSnapshop = await deliversReference.get();
        const delivers = documentSnapshop.docs.map(doc => doc.data());

        return delivers

    }


}


module.exports = DeliversService;