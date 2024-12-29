import app from './firebaseConfig.js';
import { getDatabase, ref, set } from "firebase/database";

const saveFuelRecord = (date, liters, pricePerLiter, totalPrice, fuelType, station) => {
    const db = getDatabase(app);
    const recordRef = ref(db, 'fuelRecords/' + Date.now());
    set(recordRef, {
        date: date,
        liters: liters,
        pricePerLiter: pricePerLiter,
        totalPrice: totalPrice,
        fuelType: fuelType,
        station: station
    }).then(() => {
        console.log("Data saved successfully!");
    }).catch((error) => {
        console.error("Error saving data: ", error);
    });
};

export default saveFuelRecord;
