const newsContainer = document.getElementById("newsContainer");

// Ensure Firebase is initialized first
// For modular SDK (v12+):
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

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

// Fetch latest 3 news
async function loadLatestNews() {
    newsContainer.innerHTML = ""; // clear container
    try {
        const q = query(collection(db, "news"), orderBy("date", "desc"), limit(3));
        const snapshot = await getDocs(q);

        snapshot.forEach(docSnap => {
            const news = docSnap.data();
            const card = document.createElement("div");
            card.className = "news-card";
            card.style = "background:#fff; border-radius:10px; width:300px; box-shadow:0 2px 10px rgba(0,0,0,0.1); overflow:hidden; margin:10px; display:inline-block; vertical-align:top;";

            card.innerHTML = `
                <img src="${news.image}" alt="${news.title}" style="width:100%; height:auto;">
                <div style="padding:15px;">
                    <h3>${news.title}</h3>
                    <p>${news.summary ? news.summary.substring(0, 100) : ""}...</p>
                    <a href="news.html" style="color:#d40000; text-decoration:none;">Read More →</a>
                </div>
            `;
            newsContainer.appendChild(card);
        });
    } catch(err) {
        console.error("Error fetching latest news:", err);
    }
}

// Load news on page load
loadLatestNews();
