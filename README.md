# 🎮 Iara Games

Protótipo de uma plataforma brasileira de distribuição de jogos digitais, desenvolvido em grupo com foco em **experiência do usuário, identidade visual e interatividade front-end**.

O projeto começou como uma interface estática construída com **HTML e CSS** e evoluiu, nesta Sprint, para uma experiência interativa utilizando **JavaScript e manipulação do DOM (Document Object Model)**.

---

## 👥 Integrantes

* Leonardo Franco Arakaki
* Murilo de Melo Sousa
* Samuel Liasch Alves
* Walisson Souza dos Santos

---

## 📌 Sobre o projeto

O **Iara Games** é um protótipo de plataforma de distribuição de jogos digitais voltada ao público brasileiro.

A proposta é conectar a comunidade nacional de jogadores a um catálogo de títulos, dando destaque especial a jogos desenvolvidos por criadores brasileiros ou por equipes com forte presença brasileira.

O projeto busca unir a linguagem visual de grandes plataformas de distribuição digital, como **Steam, Epic Games, Nintendo eShop e PlayStation Store**, com uma identidade visual própria inspirada na cultura brasileira, na lenda da Iara e em elementos relacionados às águas e à natureza brasileira.

---

## 💡 Proposta

O Iara Games foi pensado para funcionar como um mediador entre jogadores e publicadoras de jogos digitais, oferecendo uma experiência de descoberta, navegação e visualização de produtos.

A interface foi desenvolvida considerando padrões encontrados em plataformas consolidadas de distribuição de jogos, mantendo uma organização baseada em:

* Carrossel de jogos em destaque;
* Vitrines de produtos;
* Categorias;
* Ofertas;
* Página individual de jogos;
* Avaliações de usuários;
* Sistema de favoritos;
* Carrinho;
* Login e cadastro;
* Personalização de preferências.

Além da estrutura visual, a Sprint atual teve como objetivo transformar a interface anteriormente estática em uma experiência capaz de **responder às ações do usuário em tempo real**.

---

# 🎨 Identidade Visual

A identidade do Iara Games procura unir elementos da natureza brasileira com referências do universo gamer.

O logotipo combina a representação de uma **Vitória-Régia** com o símbolo de desligar, criando uma forma associada à letra **G**, enquanto um elemento lateral representa o **I**.

A Vitória-Régia também aparece como referência visual em elementos da interface, reforçando a associação da marca com as águas brasileiras e com a figura folclórica da Iara.

![Logotipo do Iara Games](/imgs/readme/logotipo.png)

---

## 🧠 UX — Experiência do Usuário

O design da plataforma foi inspirado em padrões de interfaces de lojas digitais de jogos.

Durante o desenvolvimento, foram analisadas plataformas como:

* Steam;
* Epic Games Store;
* Nintendo eShop;
* PlayStation Store.

Um dos principais objetivos foi manter uma navegação contínua entre os diferentes blocos da página, facilitando a descoberta de novos jogos sem criar grandes espaços vazios ou concentrar toda a atenção em apenas um elemento.

As vitrines também seguem proporções próximas aos padrões utilizados no mercado de distribuição digital, facilitando a apresentação dos jogos e mantendo consistência visual entre diferentes produtos.

Com a implementação do JavaScript, a experiência foi ampliada para permitir que o usuário interaja diretamente com diversos elementos da interface sem precisar recarregar a página.

---

# 🔤 Tipografia

As fontes utilizadas no projeto são:

### Anton

Utilizada principalmente em títulos e elementos de maior destaque.

A tipografia possui uma aparência forte e blocada, contribuindo para a identidade visual da plataforma e criando maior impacto nos títulos.

### Fira Sans

Utilizada em textos menores e informações complementares.

A fonte possui uma aparência mais neutra e confortável para leitura, mantendo uma boa relação com a Anton e contribuindo para a acessibilidade da interface.

---

# ⚙️ Funcionalidades

A Sprint atual adicionou uma camada de interatividade ao projeto utilizando **JavaScript e manipulação do DOM**.

Foram identificados oito comportamentos interativos no projeto, distribuídos em cinco arquivos JavaScript:

```text
javascript/
├── carrossel.js
├── header.js
├── game.js
├── login.js
└── cadastro.js
```

---

## 🎞️ 1. Carrossel de banners

**Página:** `index.html`
**Arquivo:** `javascript/carrossel.js`

O carrossel da página inicial passou a ser totalmente interativo.

### Funcionalidades

* Navegação pelas setas anterior/próximo;
* Indicadores em formato de bolinhas;
* Indicadores clicáveis;
* Transição suave entre os slides;
* Loop infinito;
* Atualização do indicador ativo;
* Alteração dinâmica do plano de fundo de acordo com o slide.

O usuário consegue navegar entre os diferentes jogos em destaque sem recarregar a página.

### Como visualizar

1. Abra `index.html`;
2. Localize o carrossel principal;
3. Clique nas setas laterais;
4. Clique nas bolinhas abaixo do banner;
5. Teste a navegação até o último slide e avance novamente para verificar o loop infinito.

---

## 🖼️ 2. Galeria de mídia em tela cheia

**Página:** `games/compra.html`
**Arquivo:** `javascript/game.js`

A página dos jogos recebeu um sistema de visualização ampliada para imagens e vídeos.

### Funcionalidades

* Ampliação das imagens em modal;
* Visualização do vídeo em destaque;
* Galeria de mídias;
* Navegação pelas mídias utilizando setas;
* Navegação utilizando as teclas `←` e `→`;
* Contador de posição das mídias;
* Fechamento pelo botão `×`;
* Fechamento ao clicar fora da mídia;
* Fechamento utilizando a tecla `Esc`.

Os elementos utilizados pelos modais e pela galeria são criados dinamicamente através do JavaScript e inseridos no DOM.

### Como visualizar

1. Abra `games/compra.html`;
2. Localize a seção de mídias do jogo;
3. Clique em uma das imagens;
4. Observe a abertura da imagem em tela cheia;
5. Clique em **"Ver mais mídias"**;
6. Navegue utilizando as setas da interface;
7. Teste também as teclas `←` e `→`;
8. Pressione `Esc` para fechar.

---

## ⭐ 3. Abas e avaliações interativas

**Página:** `games/compra.html`
**Arquivo:** `javascript/game.js`

A página do jogo possui uma navegação por abas entre informações do produto e avaliações.

### Funcionalidades

* Aba **"Detalhes"**;
* Aba **"Avaliações"**;
* Alteração dinâmica do conteúdo exibido;
* Sistema de curtir avaliações;
* Sistema de não curtir avaliações;
* Contadores atualizados em tempo real;
* Botões de curtir e não curtir mutuamente exclusivos;
* Expansão e recolhimento da descrição do jogo.

As avaliações são construídas dinamicamente utilizando JavaScript e elementos do DOM.

### Como visualizar

1. Abra `games/compra.html`;
2. Localize a navegação entre **"Detalhes"** e **"Avaliações"**;
3. Clique em **"Avaliações"**;
4. Clique no botão de curtir ou não curtir de uma avaliação;
5. Observe a alteração imediata do contador;
6. Clique novamente para remover a interação;
7. Teste também o botão **"Ver mais"** na descrição do jogo.

---

# 🔄 Outras interações implementadas

Além das três principais funcionalidades apresentadas acima, o projeto possui outras interações utilizando JavaScript.

---

## 📌 Navbar fixa durante a rolagem

**Página:** `index.html`
**Arquivo:** `javascript/header.js`

A barra de navegação passa a ficar fixa no topo da tela quando o usuário rola a página.

Isso permite que recursos como busca, categorias e navegação permaneçam acessíveis mesmo durante a exploração do catálogo.

### Como visualizar

1. Abra `index.html`;
2. Role a página para baixo;
3. Observe a navbar permanecer acessível no topo da tela.

---

## ❤️ Favoritos e 🛒 Carrinho

**Página:** `games/compra.html`
**Arquivo:** `javascript/game.js`

Os botões de favoritos e carrinho possuem estados interativos.

Ao clicar:

* O ícone altera seu estado visual;
* Uma notificação aparece na tela;
* A mensagem confirma a ação realizada;
* A notificação desaparece automaticamente após alguns segundos.

### Como visualizar

1. Abra `games/compra.html`;
2. Localize os botões de favorito e carrinho;
3. Clique em um deles;
4. Observe a alteração do ícone;
5. Observe a notificação exibida na tela.

---

## 📖 Expandir e recolher descrição

**Página:** `games/compra.html`
**Arquivo:** `javascript/game.js`

Descrições extensas são inicialmente limitadas para evitar que a página fique excessivamente longa.

O botão **"Ver mais"** permite expandir o conteúdo, enquanto **"Ver menos"** permite recolhê-lo novamente.

### Como visualizar

1. Abra `games/compra.html`;
2. Localize a descrição do jogo;
3. Clique em **"Ver mais"**;
4. Observe a expansão do conteúdo;
5. Clique em **"Ver menos"** para retornar ao estado original.

---

## 🔐 Mostrar senha e validação de cadastro

**Páginas:**

* `formulario/login.html`
* `formulario/criar conta.html`

**Arquivos:**

* `javascript/login.js`
* `javascript/cadastro.js`

Os formulários receberam interações para melhorar o preenchimento e fornecer feedback imediato ao usuário.

### Mostrar e ocultar senha

O ícone de olho permite alternar entre:

```text
password → text
```

Dessa forma, o usuário consegue visualizar a senha digitada quando necessário.

### Confirmação de senha

No cadastro, a senha e a confirmação são comparadas em tempo real.

O campo recebe indicação visual conforme os valores:

* Senhas diferentes → estado de erro;
* Senhas iguais → estado de sucesso.

O formulário também impede o envio quando as senhas não coincidem.

### Como visualizar

1. Abra `formulario/login.html` ou `formulario/criar conta.html`;
2. Digite uma senha;
3. Clique no ícone de olho;
4. Observe a senha ser exibida/ocultada;
5. No cadastro, preencha a senha e a confirmação;
6. Digite valores diferentes;
7. Observe o estado de erro;
8. Digite valores iguais;
9. Observe o estado de sucesso.

---

# 🧩 Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat\&logo=html5\&logoColor=white)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat\&logo=css3\&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat\&logo=javascript\&logoColor=black)

| Tecnologia            | Utilização                                                 |
| --------------------- | ---------------------------------------------------------- |
| **HTML5**             | Estruturação das páginas e componentes da plataforma       |
| **CSS3**              | Estilização, identidade visual, layouts e responsividade   |
| **JavaScript (ES6+)** | Interatividade e atualização dinâmica da interface         |
| **DOM**               | Seleção, criação e alteração de elementos em tempo real    |
| **Font Awesome**      | Ícones utilizados na interface                             |
| **Google Fonts**      | Tipografias Anton e Fira Sans                              |
| **Bootstrap 5**       | Componentes utilizados pontualmente em `preferencias.html` |

---

# ▶️ Como visualizar o projeto

## Opção 1 — Abrir localmente

Baixe ou clone o repositório e abra o arquivo:

```text
index.html
```

Para uma experiência mais adequada durante o desenvolvimento, recomenda-se utilizar uma extensão ou servidor local, como o **Live Server** do Visual Studio Code.

---

## Opção 2 — GitHub Pages

Quando o projeto estiver publicado, ele poderá ser acessado diretamente pelo GitHub Pages.

**Link do projeto publicado:**

> ⚠️ Inserir aqui o link atualizado do GitHub Pages após a publicação.

---

# 🧪 Como testar as principais funcionalidades

Após abrir a página inicial, recomenda-se testar as interações na seguinte ordem:

### Página inicial

* [ ] Navegar pelas setas do carrossel;
* [ ] Clicar nos indicadores do carrossel;
* [ ] Verificar o loop infinito;
* [ ] Rolar a página e verificar a navbar fixa.

### Página do jogo

* [ ] Clicar em uma imagem da galeria;
* [ ] Abrir o vídeo;
* [ ] Utilizar "Ver mais mídias";
* [ ] Navegar usando as setas;
* [ ] Navegar utilizando `←` e `→`;
* [ ] Fechar a galeria com `Esc`;
* [ ] Alternar entre "Detalhes" e "Avaliações";
* [ ] Curtir e não curtir avaliações;
* [ ] Expandir e recolher a descrição;
* [ ] Adicionar o jogo aos favoritos;
* [ ] Adicionar o jogo ao carrinho;
* [ ] Verificar as notificações exibidas.

### Formulários

* [ ] Abrir a tela de login;
* [ ] Testar o botão de mostrar/ocultar senha;
* [ ] Abrir a tela de cadastro;
* [ ] Testar a confirmação de senha;
* [ ] Verificar o feedback de senha correta/incorreta;
* [ ] Tentar enviar o cadastro com senhas diferentes.

---

# 📈 Evolução do projeto

### Sprint anterior

O Iara Games possuía uma interface construída principalmente com **HTML e CSS**, com foco na estrutura, identidade visual e organização das páginas.

A interface apresentava:

* Página inicial;
* Carrossel visual;
* Vitrines de jogos;
* Categorias;
* Ofertas;
* Página individual de jogo;
* Login;
* Cadastro;
* Preferências.

Entretanto, os elementos ainda não respondiam às ações do usuário.

### Sprint atual

Nesta Sprint, o projeto recebeu uma camada de **JavaScript e manipulação do DOM**, transformando a interface estática em uma experiência interativa.

Foram implementados:

* Carrossel funcional;
* Navegação por indicadores;
* Loop infinito;
* Galeria de mídia;
* Modais de imagem e vídeo;
* Navegação por teclado;
* Sistema de abas;
* Avaliações interativas;
* Curtidas e não curtidas;
* Favoritos;
* Carrinho;
* Notificações;
* Navbar fixa;
* Expansão da descrição;
* Mostrar/ocultar senha;
* Validação de confirmação de senha.

As interações respondem aos eventos do usuário sem a necessidade de recarregar a página.

---

# 🎯 Resultado

A implementação do JavaScript permitiu que o Iara Games deixasse de ser apenas um conjunto de páginas estáticas e passasse a apresentar comportamentos semelhantes aos encontrados em plataformas reais de distribuição digital.

A manipulação do DOM foi utilizada para selecionar, criar, modificar e atualizar elementos da interface em resposta a eventos como:

```text
click
scroll
input
submit
keydown
transitionend
```

Dessa forma, cada interação foi desenvolvida com o objetivo de resolver um problema específico de usabilidade e fornecer **feedback visual imediato** ao usuário.

---

# 📚 Referências

As principais referências utilizadas para pesquisa de linguagem visual, organização de lojas digitais e experiência do usuário foram:

* [Steam](https://store.steampowered.com/)
* [Nintendo eShop](https://www.nintendo.com/us/store/)
* [PlayStation Store](https://www.playstation.com/pt-br/ps5/games/)
* [Epic Games Store](https://store.epicgames.com/pt-BR/?lang=pt-BR)

---

## 📌 Status do projeto

**Concluído — Sprint de interatividade com JavaScript**

O projeto atualmente conta com a estrutura visual desenvolvida em HTML/CSS e uma camada de interatividade implementada em JavaScript, utilizando manipulação do DOM e eventos do usuário.