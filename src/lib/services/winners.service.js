import { collection, getDocs, query, orderBy, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const winnerCollection = collection(db, "globalwinner");
const WinnerRef = query(winnerCollection, orderBy("year", "desc"));

export async function getAllWinners() {
    const snap = await getDocs(WinnerRef)

    if (snap.empty) return []

    return snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

}

export async function addGlobalWinner(winnerData) {
    try {
        const docRef = await addDoc(winnerCollection, winnerData);
        return docRef.id;
    } catch (error) {
        console.error("Error adding global winner:", error);
        throw error;
    }
}

export async function updateGlobalWinner(id, winnerData) {
    try {
        const docRef = doc(db, "globalwinner", id);
        await updateDoc(docRef, winnerData);
        return true;
    } catch (error) {
        console.error("Error updating global winner:", error);
        throw error;
    }
}

export async function deleteGlobalWinner(id) {
    try {
        const docRef = doc(db, "globalwinner", id);
        await deleteDoc(docRef);
        return true;
    } catch (error) {
        console.error("Error deleting global winner:", error);
        throw error;
    }
}