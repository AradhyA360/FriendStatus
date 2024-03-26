var buttonN = document.querySelector(".buttonN button");

buttonN.addEventListener("click", function () {
  if (buttonN.innerText === "Follow") {
    buttonN.style.backgroundColor = "green";
    buttonN.innerHTML = "Following";
    console.log("Clicked  to follow this ID");
  } else {
    buttonN.style.backgroundColor = "black";
    buttonN.innerHTML = "Follow";
    console.log("Clicked  to unfollow this ID");
  }
});
