import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import PostStyleModule from "../../styles/Post.module.css";

import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface Content {
  type: 'pharagraph' | 'link';
  content: string;
}


function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(["Post maravilhoso!!!"]);

  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]); // forma de adicionar um novo item a um array sem alterar o original 
    setNewCommentText("");
  }

  function handleCreateNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentsToDelete: string) {

    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentsToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length == 0

  return (
    <article className={PostStyleModule.post}>
      <header>
        <div className={PostStyleModule.author}>
          <Avatar src={author.avatarUrl} />

          <div className={PostStyleModule.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishDateRelativeToNow}
        </time>
      </header>

      <div className={PostStyleModule.content}>
        {content.map((line) => {
          if (line.type === "pharagraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className={PostStyleModule.comentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="coment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleCreateNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={PostStyleModule.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}

export default Post;
