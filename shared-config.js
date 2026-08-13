// Configure este arquivo com os dados do Firebase Realtime Database para
// sincronizar a contagem entre todos os celulares, computadores e TVs.
//
// Enquanto estiver desativado, o site continua funcionando, mas cada aparelho
// salva os dados apenas no proprio navegador.
//
// Importante: se ativar o Firebase, configure regras do Realtime Database para
// impedir escrita publica. O bloqueio de admin no navegador evita alteracoes
// acidentais, mas a protecao forte precisa estar nas regras do Firebase.
//
// Para exigir senha no botao "Entrar admin", preencha adminPasscodeHash com o
// SHA-256 da senha. Exemplo no console do navegador:
// crypto.subtle.digest('SHA-256', new TextEncoder().encode('sua-senha'))
//   .then((hash) => console.log([...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('')));

window.SOBRAL_SHARED_CONFIG = null;

/*
window.SOBRAL_SHARED_CONFIG = {
  provider: 'firebase',
  path: 'dias-sem-acidentes/state',
  adminPasscodeHash: 'SHA256_DA_SENHA_DE_ADMIN',
  firebaseConfig: {
    apiKey: 'SUA_API_KEY',
    authDomain: 'SEU_PROJETO.firebaseapp.com',
    databaseURL: 'https://SEU_PROJETO-default-rtdb.firebaseio.com',
    projectId: 'SEU_PROJETO',
    storageBucket: 'SEU_PROJETO.appspot.com',
    messagingSenderId: 'SEU_SENDER_ID',
    appId: 'SEU_APP_ID'
  }
};
*/
