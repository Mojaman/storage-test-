// Firebaseの機能を「外部から読み込む」
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase 初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("save").addEventListener("click", async () => {
  await addDoc(collection(db, "messages"), {
    text: "こんにちは",
    time: Date.now()
  });
});

const list = document.getElementById("list");

const snapshot = await getDocs(collection(db, "messages"));
snapshot.forEach(doc => {
  const li = document.createElement("li");
  li.textContent = doc.data().text;
  list.appendChild(li);
});
