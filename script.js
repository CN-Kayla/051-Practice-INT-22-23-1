let inputVideoOne = document.querySelector(".input-one");
let submitCommentVideoOne = document.querySelector(".submit-one");
let yourCommentVideoOne = document.querySelector(".your-comment-one");

let inputVideoTwo = document.querySelector(".input-two");
let submitCommentVideoTwo = document.querySelector(".submit-two");
let yourCommentVideoTwo = document.querySelector(".your-comment-two");

// Enter your tiktok username here!
let myUsername = "ADD YOUR USERNAME HERE";

submitCommentVideoOne.onclick = function() {
  // Add your code here for the Code Along!

  // Code Along - Create a variable to select the first input tag's value here!
  let userComment = document.querySelector("input").value;
  console.log(userComment);

  // Code Along - Use `.innerhtml()` to display the input value in `your-comment-one`
  let yourCommentOne = document.querySelector(".your-comment-one");
  yourCommentOne.innerHTML = userComment;

  // ________________________________________
  videoOne.style.display = "none";
  videoTwo.style.display = "none";
  firstCommentBox.style.display = "block";
};

submitCommentVideoTwo.onclick = function() {
  // Add your code here for the Code it Solo!

  // Code it Solo - Create a variable to select the second input tag's value here!

  // Code it Solo - Use `.innerhtml()` to display the input value in `your-comment-two`

  // ________________________________________
  videoOne.style.display = "none";
  videoTwo.style.display = "none";
  secondCommentBox.style.display = "block";
};









// Don't modify the code below!
// ____________________________
let firstCommentButton = document.querySelector(".comment-button-one");
let firstCommentBox = document.querySelector(".comment-box-one");
let secondCommentButton = document.querySelector(".comment-button-two");
let secondCommentBox = document.querySelector(".comment-box-two");
let videoOne = document.querySelector(".video-one");
let videoTwo = document.querySelector(".video-two");
firstCommentButton.onclick = function() {
  videoOne.style.display = "none";
  videoTwo.style.display = "none";
  firstCommentBox.style.display = "block";
};
secondCommentButton.onclick = function() {
  videoOne.style.display = "none";
  videoTwo.style.display = "none";
  secondCommentBox.style.display = "block";
};