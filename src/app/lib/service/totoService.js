import { db } from "../utils/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

const todosCollection = collection(db, "todos");

export async function addTodo(title, detail, dueDate) {
  return await addDoc(todosCollection, {
    title,
    detail,
    dueDate,
    createdAt: serverTimestamp(),
  });
}

export async function fetchTodos() {
  const q = query(todosCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function deleteTodo(id) {
  await deleteDoc(doc(db, "todos", id));
}

export async function updateTodo(id, title, detail, dueDate) {
  await updateDoc(doc(db, "todos", id), {
    title,
    detail,
    dueDate,
  });
}
