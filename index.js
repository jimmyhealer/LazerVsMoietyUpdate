import $ from "jquery";
import { route, router } from "jqueryrouter";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD30eurLvUO4TiyNK6_wNZuS1RBIO0_YUc",
  authDomain: "lazervsmoiety.firebaseapp.com",
  databaseURL:
    "https://lazervsmoiety-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lazervsmoiety",
  storageBucket: "lazervsmoiety.appspot.com",
  messagingSenderId: "377792998877",
  appId: "1:377792998877:web:7ed0e41f065ff68f59da34",
  measurementId: "G-L94KY87XKS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

route((e) => {
  switch (e.route) {
    case "/":
      $("#msg").html("Home");
      break;
    case "/latest":
      update();
      break;
    default:
      $("#msg").html("404");
  }
});

router.init();

function update() {
  getDoc(doc(db, "setting", "latest")).then((doc) => {
    $("#msg").html(doc.data().version);
  });
}
