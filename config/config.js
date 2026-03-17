// 🔥 CONFIG FIREBASE (OFICIAL)

const firebaseConfig = {
  apiKey: "AIzaSyA6YNz6vagSyIJumrKeY1Ptr_6rTpMMZ_A",
  authDomain: "rota-22c3b.firebaseapp.com",
  databaseURL: "https://rota-22c3b-default-rtdb.firebaseio.com",
  projectId: "rota-22c3b",
  storageBucket: "rota-22c3b.firebasestorage.app",
  messagingSenderId: "491665660350",
  appId: "1:491665660350:web:fb79aa28f612d321c081ef",
  measurementId: "G-8QBM2TCPY8"
};

// 🔒 INICIALIZAÇÃO SEGURA
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// 🌍 INSTÂNCIAS GLOBAIS
const db = firebase.database();
const auth = firebase.auth();

// 👤 USUÁRIO LOGADO
function getUsuarioLogado() {
  return {
    uid: localStorage.getItem("usuario_id"),
    empresa_id: localStorage.getItem("empresa_id"),
    perfil: localStorage.getItem("perfil")
  };
}

// 🚪 LOGOUT PADRÃO
function logout() {
  localStorage.clear();
  window.location.href = "../login/index.html";
}