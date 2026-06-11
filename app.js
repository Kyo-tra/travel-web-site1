const posts = [
  {
    title: "Arashiyama~Autumn~",
    slug: "Arashiyama",
    cover: "images/Arashiyama.jpeg"
  },
  {
    title: "Gion Festival",
    slug: "Gion",
    cover: "https://source.unsplash.com/300x200/?gion,festival"
  },
  {
    title: "Kiyomizu Temple",
    slug: "Kiyomizu",
    cover: "https://source.unsplash.com/300x200/?kiyomizu,temple"
  }
];

const container = document.getElementById("posts");

posts.forEach(post => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${post.cover}" width="100%">
    <h3>${post.title}</h3>
  `;

  card.onclick = () => {
    window.location.href = post.slug + ".html";
  };

  container.appendChild(card);
});
