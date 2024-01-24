import { collection } from 'firebase/firestore';
import { db } from '../firebase'

export const taskCollectionRef = collection(db, 'tasks');