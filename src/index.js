import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

const data = [
  {
    name: "Dinesh",
    src: "./images/crysis.jpg",
    message: "Hello Everone!",
    likes: 21,
    comments: 15,
    shares: 5,
  },
  {
    name: "Alex",
    src: "./images/empire.jpg",
    message: "Wow, What a beautiful Day!",
    likes: 29,
    comments: 14,
    shares: 15,
  },
  {
    name: "Joe",
    src: "./images/rock_city.jpg",
    message: "Larry! Where are you?",
    likes: 42,
    comments: 17,
    shares: 23,
  },
  {
    name: "Cony",
    src: "./images/tomb_raider.jpg",
    message: "Good day, Mates!",
    likes: 12,
    comments: 7,
    shares: 3,
  },
];

// Handle Click

const call = (type, name, number) => {
  alert(`${name}'s post has ${number} ${type}`);
};

// Posts
function Posts() {
  return (
    <section className="posts">
      {data.map((post, index) => {
        return <Post key={index} {...post} />;
      })}
    </section>
  );
}

function Post(post) {
  return (
    <div className="post">
      <Person {...post} />
      <Image {...post} />
      <Responses {...post} />
    </div>
  );
}

function Person({ name, message }) {
  return (
    <h2 className="posted_by">
      {name} says {message}
    </h2>
  );
}

function Image({ src, message }) {
  return <img className="post_image" src={src} alt={message} />;
}

function Responses({ name, likes, comments, shares }) {
  return (
    <div className="responses">
      <button onClick={() => call("likes", name, likes)}>{likes} Likes</button>
      <button onClick={() => call("comments", name, comments)}>
        {comments} Comments
      </button>
      <button onClick={() => call("shares", name, shares)}>
        {shares} Shares
      </button>
    </div>
  );
}

ReactDom.render(<Posts />, document.getElementById("root"));
