import Header from "./components/Header/Header.tsx";
import { Post, PostType } from "./components/Post/Post.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";

import AppStylesModule from "./styles/App.module.css";
import "./styles/global.css";

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: string

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/souzalipe.png",
      name: "Felipe Souza",
      role: "Programadores do Amanhã",
    },
    content: [
      { type: "pharagraph", content: "Fala galeraa 👋" },
      {
        type: "pharagraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz",
      },
      { type: "link", content: "https://github.com/souzalipe" },
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
