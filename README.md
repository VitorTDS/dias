# Dias Sem Acidente

Painel web simples para acompanhar a quantidade de dias sem acidentes, com foco em exibição rápida para equipes, computadores e telas de TV.

## Recursos

- Contador automático de dias sem acidentes.
- Data do último acidente configurável.
- Meta de dias sem acidentes com barra de progresso.
- Histórico de acidentes registrados.
- Modo escuro.
- Modo painel para TV.
- Exportação/impressão em PDF pelo navegador.
- Bloqueio de ações administrativas por senha configurável.
- Suporte opcional a Firebase Realtime Database para sincronizar dados entre dispositivos.

## Como rodar localmente

Este projeto é estático e pode ser servido por qualquer servidor HTTP simples.

Com Python:

```bash
python -m http.server 8012 --bind 127.0.0.1
```

Depois acesse:

```text
http://127.0.0.1:8012/index.html
```

Também é possível publicar os arquivos em serviços como GitHub Pages, Netlify, Vercel ou qualquer hospedagem estática.

## Arquivos principais

- `index.html`: estrutura, estilos e lógica principal do painel.
- `shared-config.js`: configuração opcional para senha administrativa e sincronização via Firebase.

## Configuração administrativa

O arquivo `shared-config.js` permite definir `adminPasscodeHash`, que deve conter o hash SHA-256 da senha de administrador.

Para gerar o hash pelo console do navegador:

```js
crypto.subtle.digest('SHA-256', new TextEncoder().encode('sua-senha'))
  .then((hash) => console.log([...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('')));
```

Depois, use o valor gerado em:

```js
window.SOBRAL_SHARED_CONFIG = {
  adminPasscodeHash: 'HASH_SHA256_DA_SENHA'
};
```

## Sincronização com Firebase

Por padrão, o sistema salva os dados no navegador do dispositivo. Para compartilhar os dados entre celulares, computadores e TVs, configure o Firebase Realtime Database em `shared-config.js`.

Exemplo de estrutura:

```js
window.SOBRAL_SHARED_CONFIG = {
  provider: 'firebase',
  path: 'dias-sem-acidentes/state',
  adminPasscodeHash: 'HASH_SHA256_DA_SENHA',
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
```

Importante: configure regras no Realtime Database para evitar escrita pública indevida.

## Publicação no GitHub Pages

1. Envie os arquivos para o repositório.
2. No GitHub, acesse `Settings > Pages`.
3. Em `Build and deployment`, selecione a branch principal e a pasta raiz.
4. Salve e aguarde a URL de publicação.

## Licença

Uso interno/livre conforme necessidade do projeto.
