import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/config.js";

const SETTINGS_DOC_PATH = "globalSettings/site";

export async function getSiteSettings() {
  try {
    const snap = await getDoc(doc(db, SETTINGS_DOC_PATH));
    if (snap.exists()) {
      return snap.data();
    }
  } catch (error) {
    console.error("Error fetching site settings:", error);
  }
  return { maintenanceMode: false };
}

export async function updateSiteSettings(settings) {
  try {
    await setDoc(doc(db, SETTINGS_DOC_PATH), settings, { merge: true });
    return true;
  } catch (error) {
    console.error("Error updating site settings:", error);
    throw error;
  }
}

export function subscribeToSiteSettings(callback) {
  return onSnapshot(doc(db, SETTINGS_DOC_PATH), (snap) => {
    if (snap.exists()) {
      callback(snap.data());
    } else {
      callback({ maintenanceMode: false });
    }
  }, (error) => {
    console.error("Error subscribing to site settings:", error);
  });
}
