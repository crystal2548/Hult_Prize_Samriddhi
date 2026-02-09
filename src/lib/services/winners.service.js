import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const WinnerRef = collection(db, "globalwinner")

export async function getAllWinners() {
    const snap = await getDocs(WinnerRef)

    if (snap.empty) return []

    return snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

}