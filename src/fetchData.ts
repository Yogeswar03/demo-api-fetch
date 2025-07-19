import fetch from 'node-fetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error("HTTP error");

    const data = (await res.json()) as Post[]; // 👈 cast to Post[]

    console.log("Posts:");
    data.slice(0, 5).forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
    });
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchData();
