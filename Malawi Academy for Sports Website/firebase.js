// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjuxh9gE9iQjnEMO6OTJK3ZUqGhSV9Geg",
  authDomain: "malawisportswebsite-4f960.firebaseapp.com",
  projectId: "malawisportswebsite-4f960",
  storageBucket: "malawisportswebsite-4f960.firebasestorage.app",
  messagingSenderId: "509037310300",
  appId: "1:509037310300:web:9a010663d162a7aa53d199",
  measurementId: "G-FZTWVF8JTL" // optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Firestore reference
