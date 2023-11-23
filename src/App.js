import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  addDoc,
} from "firebase/firestore";

function App() {
  const sendOrder = () => {
    const order = {
      buyer: {
        name: "Avantt",
        phone: 33333,
        email: "fweewefff",
      },
      items: [
        { id: 3, title: "bicicleta", price: 200, quantity: 8 },
        { id: 5, title: "gorra", price: 2000, quantity: 6 },
      ],
      total: 13600,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
      }
    });
  };

  const buyer = {
    name: "Avantt",
    phone: 33333,
    email: "fweewefff",
  };

  const updateOrder = () => {
    const db = getFirestore();
    const orderDoc = doc(db, "orders", "2FA0wF5sKwj7SG1jG4w7");
    updateDoc(orderDoc, {
      total: 333331,
      cuotas: 5,
      buyer: { ...buyer, phone: 55 },
    });
  };

  return (
    <div>
      <button onClick={sendOrder}>ENVIAR ORDEN</button>
      <button onClick={updateOrder}>ACTUALIZAR ORDEN</button>
    </div>
  );
}

export default App;
