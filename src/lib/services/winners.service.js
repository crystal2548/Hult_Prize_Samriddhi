import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

const WinnerRef = query(collection(db, "globalwinner"), orderBy("year", "desc"));

export async function getAllWinners() {
    const snap = await getDocs(WinnerRef)

    if (snap.empty) return []

    return snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

}