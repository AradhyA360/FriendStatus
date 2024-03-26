var buttonN = document.querySelector(".buttonN button");

buttonN.addEventListener("click", function () {
  if (buttonN.innerText === "Follow") {
    buttonN.innerHTML = "Following";
    console.log("Clicked  to follow this ID");
  } else {
    buttonN.innerHTML = "Follow";
    console.log("Clicked  to unfollow this ID");
  }
});
