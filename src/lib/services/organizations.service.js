import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const organizersRef = collection(db, "organizers")

export async function getAllOrganizers() {
    const snap = await getDocs(organizersRef)

    if (snap.empty) return []

    return snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

}