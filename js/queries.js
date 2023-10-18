import {
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  increment,
} from 'firebase/firestore';
import db from './firebase.js';

const items = {
  Apples: 1,
  Milk: 2,
  Bananas: 2,
};

async function getItems() {

  const cart = {}
  const query = await getDocs(collection(db, "cart"))
  query.forEach(function (doc) {
    const data = doc.data();
    cart[data.name] = data.count;
  });

  return cart;
}

async function addItem(name) {
  const docRef = doc(db, "cart", name)
  const docSnap = await getDoc(docRef); 
  if (docSnap.exists()) {
    updateDoc(docRef, {
      count: increment(1)
    })
  } else {
    setDoc(docRef, {
      name: name, 
      count: 1, 
    })
  }
}

async function removeItem(name) {
  const docRef = doc(db, "cart", name);
  const docSnap = await getDoct(docRef); 
  const data = docSnap.data();
  if (data.cont == 1) {
    return deleteDoc(docRef)
  } else {
    return updateDoc(docRef, {
      count: increment(-1)
    })
}
  if (items[name] == 1) {
    // Only one item left, just delete the item from the cart.
    delete items[name];
  } else {
    // More than one item left, decrement the count.
    items[name] -= 1;
  }
}

export default { getItems, addItem, removeItem };
