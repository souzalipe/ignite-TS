import CommentStyle from "../../styles/Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";



 interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
 }

export function Comment({ content, onDeleteComment }: CommentProps) {
 const [likeCount, setlikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  // function handleLikeComment() {  posso tanto usar a função direto no botão ou criar uma Arrow function para ela
  //   setlikeCount(likeCount + 1)
  // }
 

  return (
    <div className={CommentStyle.comment}>
      <Avatar hasBorder={false} src="https://github.com/souzalipe.png" alt="" />

      <div className={CommentStyle.commentBox}>
        <div className={CommentStyle.commentContent}>
          <header>
            <div className={CommentStyle.authorAndTime}>
              <strong>Felipe Souza</strong>
              <time
                title="11 de Dezembro às 08:39h"
                dateTime="2024-12-14  08:39:20"
              >
                Cerca de 1h a trás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={() =>setlikeCount(likeCount + 1)}> 
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
