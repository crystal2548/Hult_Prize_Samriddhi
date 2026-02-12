import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

const TeamProjectRef = query(collection(db, "teamProject"), orderBy("year", "desc"));

export async function getAllProjects() {
    const snap = await getDocs(TeamProjectRef)

    if (snap.empty) return []

    return snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

}