import { UserCard } from "./components/card.js";

const fetchUsers = (url) => {
  return new Promise((resolve, reject) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      resolve({
        message: "Successful",
        data: data,
      });
    })
    .catch((err) => {
      reject({
        message: "Error in fetching data",
        error: err,
      });
    });
  });
};

const renderUsers = (root) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetchUsers(url).then((response) => {
    // render cards for each user
    const { response: users } = response;
    users.forEach((user) => {
      root.appendChild(new UserCard(user).userCard);
    });
  });
};

const init = () => {
  // this code can be used to initaize the application state
  const root = document.getElementById("root");
  renderUsers(root);
};

//calling the function
init();