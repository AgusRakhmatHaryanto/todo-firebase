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

async function addTodo(title, detail, dueDate) {
  try {
    const docRef = await addDoc(todosCollection, {
      title,
      detail,
      dueDate,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function fetchTodos(setTodos) {
  try {
    const q = query(todosCollection, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const todosList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTodos(todosList);
  } catch (e) {
    console.error("Error fetching todos: ", e);
  }
}

async function deleteTodo(id) {
  try {
    await deleteDoc(doc(todosCollection, id));
    console.log("Document successfully deleted!");
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}

async function updateTodo(id, title, detail, dueDate) {
  try {
    await updateDoc(doc(todosCollection, id), {
      title,
      detail,
      dueDate,
    });
    console.log("Document updated successfully");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

export { addTodo, fetchTodos, deleteTodo, updateTodo };
