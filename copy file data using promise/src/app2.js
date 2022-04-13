import { UserCard, testOne } from "./components/card.js";

const fetchuser = (url)=>{
  return new Promise((resolve, reject) => {
    fetch(url) 
    .then((response) =>{
      return response.json();
    })
    .then((data)=>{
      resolve({
        data: data,
      })
    })
    .catch((error) =>{
      console.log("error ala", error);
    }) 
  })
}

const renderUsers = (root) => {
  const url= "https://jsonplaceholder.typicode.com/users";
  fetchuser(url).then((response)=>{
    const {data:usersList}=response;
    console.log("ehellllllllllllooooo", response);
    usersList.forEach(item => {
      root.appendChild(new testOne(item).render())
    });
  })
}
const init = () => {
  // this code can be used to initaize the application state
  const root = document.getElementById("root");
  renderUsers(root);
};

//calling the function
init();