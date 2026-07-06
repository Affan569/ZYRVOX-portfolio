import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const useFirestore = () => {
  const submitContact = async (formData) => {
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp(),
        read: false
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  return { submitContact };
};
