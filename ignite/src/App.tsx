import Header from "./components/Header/Header.tsx";
import { Post, PostType } from "./components/Post/Post.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";

import AppStylesModule from "./styles/App.module.css";
import "./styles/global.css";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Nathaliaaguiar.png",
      name: "Nathalia Aguiar",
      role: "Desenvolvedora Front-end",
    },
    content: [
      {
        type: "pharagraph",
        content:
          "✨ Concluí a trilha de React Native no NLW Pocket: Mobile da Rocketseat! ✨",
      },

      {
        type: "pharagraph",
        content:
          "Entre os dias 09 e 13 de dezembro de 2024, tive o privilégio de participar deste evento incrível, guiado pelo educador Rodrigo Gonçalves , que tornou o aprendizado leve, dinâmico e muito prático. Foi o meu primeiro contato com React Native.",
      },
      { type: "link", content: "https://github.com/Nathaliaaguiar" },
    ],
    publishedAt: new Date("2024-12-03 20:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/brenddamachado.png",
      name: "Brenda Machado",
      role: "L'oréal Brasil",
    },
    content: [
      { type: "pharagraph", content: "Conquista Realizada ✨" },
      {
        type: "pharagraph",
        content:
          "Hoje compartilho uma marco no meu perfil, vão dar uma olhada 👀",
      },
      { type: "link", content: "https://github.com/brenddamachado" },
    ],
    publishedAt: new Date("2024-12-06 20:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/souzalipe.png",
      name: "Felipe Souza",
      role: "Programadores do Amanhã",
    },
    content: [
      {
        type: "pharagraph",
        content:
          "🎉 Dei aula para uma Sênior e olha no que deu! 😨",
      },

      {
        type: "pharagraph",
        content:
        "Na segunda-feira, durante a Mão no Código na Programadores do Amanhã, discutimos dois conceitos fundamentais do TypeScript: União (|) e Interseção (&). 🛠️ Antes disso, a professora Iasmim Oliveira já tinha me proposto um grande desafio: dar essa aula e, de quebra, encontrar uma ligação matemática entre esses conceitos. E o mais interessante? Eu só sabia o básico de TypeScript! Mesmo assim, o resultado foi incrível:"
      },
      { type: "link", content:"link do post no LinkedIn" },
    ],
    publishedAt: new Date("2024-12-23 10:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={AppStylesModule.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id} // <= Qual a informação que dar uma identificação de qual post é qual?
                post={post} // <= ;vou ter todas as informações do post
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
