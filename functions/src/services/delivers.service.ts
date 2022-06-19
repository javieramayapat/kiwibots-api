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

        const deliversReference = db.collection('delivers');
        const documentSnapshop = await deliversReference.get();
        const delivers = documentSnapshop.docs.map(doc => doc.data());

        return delivers

    }

    getDeliverById = async (id: number) => {
        const deliversReference = db.collection('delivers').where('id', '==', id);
        const documentSnapshop = await deliversReference.get();
        const deliver = documentSnapshop.docs.map(doc => doc.data());

        return deliver
    }


}


module.exports = DeliversService;