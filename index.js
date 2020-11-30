var submitButton = document.getElementById("submitMe");
submitButton.addEventListener("click", addItem);

function addItem() {
    console.log("Finally!");
    var inputItem = document.getElementById("new-item").value;
    var li = document.createElement("li");
    var text = document.createTextNode(inputItem);
    li.appendChild(text);

    var container = document.getElementById("list-container");
    container.appendChild(li);
}