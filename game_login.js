// Create function addUser()
function addUser()
{
player1_name = document.getElementById("player1_number").value;
player2_name = document.getElementById("player2_number").value;
localStorage.setItem("player1_number", player1_name);
localStorage.setItem("player2_number", player2_name);
window.location ="game_page.html";

}

