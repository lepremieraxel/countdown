function isConnected() {
  // console.log(localStorage);
  const usersFile = "./src/data/users.json";
  const session = localStorage.getItem("username");
  let usernameTab = [];
  let request = new XMLHttpRequest();
  request.open("GET", usersFile);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    const data = request.response;
    if (data != null) {
      data.forEach((line) => {
        usernameTab.push(line["username"]);
      });
      if (usernameTab.includes(session)) {
        // console.log(true);
        let usernameHeader = document.querySelector("header span a  ");
        usernameHeader.innerHTML = "Hello&nbsp;" + session;
        let modal = document.querySelector(".modal");
        if(modal != null){
          modal.parentElement.removeChild(modal);
        }
        let modalOverlay = document.querySelector(".modal-overlay");
        if(modalOverlay != null){
          modalOverlay.parentElement.removeChild(modalOverlay);
        }
        let userBtn = document.querySelector("#connect");
        userBtn.removeAttribute("onclick");
        userBtn.addEventListener("click", () => {
          window.location.href = "./pages/user.html";
        });
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
}

document.addEventListener("click", isConnected());
