const users = [
    { id: "1", name: "Azhari", email: "azhar@example.com", age: 25 },
    { id: "2", name: "Saniscara", email: "saniscara@example.com", age: 19 },
    { id: "3", name: "Sarah", email: "sarah@example.com" },
];

const posts = [
    {
        id: "1",
        title: "The first post",
        body: "Hello this is the first post",
        published: true,
        author: "1",
    },
    {
        id: "2",
        title: "The second post",
        body: "Hello this is the second post",
        published: false,
        author: "1",
    },
    {
        id: "3",
        title: "The third post",
        body: "Hello this is the third post",
        published: true,
        author: "3",
    },
];

const comments = [
    { id: "1", text: "Hello thanks for sharing!", author: "2", post: "1" },
    { id: "2", text: "It is working for me", author: "3", post: "1" },
    { id: "3", text: "Nice content", author: "3", post: "2" },
    { id: "4", text: "GG", author: "2", post: "2" },
];

const db = {
    users,
    posts,
    comments,
};

export { db as default };
