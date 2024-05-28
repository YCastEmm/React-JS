// Importar las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore"; 


// Configuración de Firebase para tu aplicación web
// Para Firebase JS SDK v7.20.0 y versiones posteriores, measurementId es opcional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Crear una instancia del proveedor de Google
const provider = new GoogleAuthProvider();

let emails =    ["ycastagnola@x-28.com",
                "apaz@x-28.com",
                "mmondani@x-28.com",
                "dcangi@x-28.com",
                "fcalvet@x-28.com"                
]
// Función para iniciar sesión con Google
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // Este `result` contiene el token de acceso de Google y la información del usuario
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    const user = result.user;
    if (!user.email.includes("x-28.com")) {
        throw new Error("Esta aplicación solo está disponible para usuarios de X-28")
    }

    if (!user.email.includes("x-28.com")) {
        throw new Error("Esta aplicación solo está disponible para usuarios de X-28")
    }

    if (!emails.includes(user.email)) {
        throw new Error("Esta aplicación solo está disponible para integrandes de Investigación y Desarrollo")
    }

    // Puedes manejar el resultado de la autenticación aquí, como guardar información del usuario en tu aplicación
    console.log("Usuario autenticado:", user);
    return { user, token };
  } catch (error) {
    // Manejar errores aquí
    console.error("Error al iniciar sesión con Google:", error);
    return { error };
  }
};



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);




export async function getLinksFromDatabase() {
    const querySnapshot = await getDocs(collection(db, "links_id"));
    const links = [];
    querySnapshot.forEach((doc) => {
        const linkData = doc.data();
        links.push({
            id: doc.id,
            name: linkData.name,
            url: linkData.url,
            description: linkData.description
        });
    });
    return links;
}
