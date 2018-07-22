function postComment() {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let commenterName = document.getElementById("commenterName").value;
  let commentText = document.getElementById("commentText").value;
  let comments = document.getElementById("comments");
  comments.innerHTML += commentTemplate({ 'comment': commentText, 'commenter': commenterName });
}

function createPost() { 
  