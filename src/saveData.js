import app from './firebaseConfig.js'; // Add this line to import the app object
import { getDatabase, ref, set } from "firebase/database";

const saveFuelRecord = (date, liters, pricePerLiter, totalPrice, fuelType, station) => {
    const db = getDatabase(app); // Now you can use the app object here
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
