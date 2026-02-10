import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const WinnerRef = collection(db, "pastWinnersData")

export async function getAllPastWinners() {
    const snap = await getDocs(WinnerRef)

    if (snap.empty) return []

    return snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

}