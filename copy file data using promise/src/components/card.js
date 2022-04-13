export function UserCard(user) {
  const userCardbox = document.createElement("div");
  userCardbox.classList.add("userCard");

  const userName = document.createElement("p");
  userName.innerText = user.name;

  const userEmailId = document.createElement("p");
  userEmailId.innerText = user.email;

  userCardbox.appendChild(userName);
  userCardbox.appendChild(userEmailId);

  this.userCardbox = userCardbox;
  }
  
  
  export class UserCard1{
    constructor(user){
      this.userCard= document.createElement("div");
      this.userCard.classList.add("userCard");

      const userName= document.createElement("p");
      this.userCard.innerText=user.name;

      this.userCard.appendChild(userName)
    }
    render =() =>{
      return this.userCard;
    }
  }

  export class testOne{
    constructor(test){
      this.testBox = document.createElement("div");
      this.testBox.classList.add("userCardx");

      const name = document.createElement("p"); // how to add class to this p tag
      this.testBox.innerText=test.name;

      this.testBox.appendChild(name);
    }
    render = () => {
      return this.testBox;
    } 
  }