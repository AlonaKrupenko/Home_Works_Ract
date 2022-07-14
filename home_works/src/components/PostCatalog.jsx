import { useEffect } from "react";
import { useState } from "react";

function PostCatalog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function getData() {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      res = await res.json();
      setPosts(res);
    }
    getData();
  }, []);

  return (
    <div className="posts">
      <ul className="posts__list" style={{ textAlign: "left" }}>
        {posts === null
          ? "text is loading"
          : posts.map((el, index) => {
              return (
                <li
                  key={index}
                  className="posts_single-post"
                  data-post-id={el.id}
                >
                  <h3 className="posts__post-title" style={{ color: "blue" }}>
                    {el.title}
                  </h3>
                  <p className="posts__post-description">{el.body}</p>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default PostCatalog;
