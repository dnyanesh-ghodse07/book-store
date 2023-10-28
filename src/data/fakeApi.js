import books from "./book-data.json";

const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!books) {
      return setTimeout(() => reject(new Error("Users not found")), 1000);
    }

    setTimeout(() => resolve(books), 1000);
  });

export default getUsers();
