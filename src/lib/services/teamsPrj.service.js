import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const TeamProjectRef = collection(db, "teamProject")

export async function getAllProjects() {
    const snap = await getDocs(TeamProjectRef)

    if (snap.empty) return []

    return snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

}