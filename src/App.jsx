import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

/*
  Atributos que variam no component Post 
  author: {avatarUrl: "", name: "", role:""}
  publishedAt: Date
  content: String
*/

const posts = [ //Criando um array de objetos, para simular um feed com vários posts diferentes
  {
    id: 1, //Id para cada post, onde cada post se trata de um objeto
    author: { //Informações sobre o autor do post
      avatarUrl: 'https://github.com/AndreColi.png',
      name: 'André Igor',
      role: 'BackEnd Developer'
    },
    
    content: [ //Estratégia de transformar todo o conteúdo em objetos, para que o BackEnd NUNCA consiga enviar dados diretamente em HTML para o FrontEnd
      { type: 'paragraph', content: 'Fala galeraa 👋' }, //Os objetos que se tratam apenas de uma frase no conteúdo recebem tipo paragraph
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz estudando de NodeJs, como eu amo essa área. 🚀'},
      { type: 'link', content: '👉AndreColi/ProjetoNodeJ' }, //Os objetos que são links recebem tipo link
    ],

    publishedAt: new Date('2024-10-04 12:43:00'),
  },

  {
    id: 2, 
    author: { 
      avatarUrl: 'https://github.com/MrNickouls2003.png',
      name: 'Nícolas Montovani',
      role: 'BlockChain Developer'
    },
    
    content: [ 
      { type: 'paragraph', content: 'Tudo bem pessoal?' }, 
      { type: 'paragraph', content: 'Finalizei um projeto de contratos inteligentes na BlockChain, depois deem uma olhada, está super interessante!'},
      { type: 'link', content: '👉MrNickouls2003/BlockChain' }, 
    ],

    publishedAt: new Date('2024-10-06 22:25:00'),
  },
]



export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => { //Ao invés de colocar um componente post para cada post, agora será feito iterando
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt} 
              />
            ) 
          })}
        </main>
      </div>

    </div>

  )
}

