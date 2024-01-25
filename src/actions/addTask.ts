'use server'
import { db } from "@/db/firebase";
import { collection, addDoc } from "firebase/firestore"; 

export const addData = async (formData: FormData) => {

  const docRef = await addDoc(collection(db, "tasks"), {
    email: formData.get('email'),
    category: formData.get('category'),
    description: formData.get('description')
  });
  console.log("Task created with id: ", docRef.id);
}