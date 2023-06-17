import { auth } from '../firebase-config';
import { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

export default function useFirestore(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const user = auth.currentUser;
    if (!user) {
      // User not logged in, use defaultValue
      if (typeof defaultValue === 'function') {
        return defaultValue();
      } else {
        return defaultValue;
      }
    }

    return defaultValue; // Return the initial state value
  });

  useEffect(() => {
    const updateFirestore = async () => {
      const user = auth.currentUser;
      if (!user) {
        // User not logged in, do nothing
        return;
      }

      const firestore = getFirestore();
      const collectionRef = collection(firestore, 'users', user.uid, key);

      try {
        if (Array.isArray(value)) {
          // Handle array values by iterating and adding each item individually
          for (const item of value) {
            await addDoc(collectionRef, item);
          }
        } else {
          // Create a new document in the collection
          await addDoc(collectionRef, value);
        }

        // Retrieve the updated data from Firestore
        const querySnapshot = await getDocs(collectionRef);
        const updatedData = querySnapshot.docs.map((doc) => doc.data());

        // Update the local state with the retrieved data
        setValue(updatedData);
      } catch (error) {
        console.error('Error creating document:', error);
      }
    };

    updateFirestore();
  }, [key, value]);

  return [value, setValue];
}
