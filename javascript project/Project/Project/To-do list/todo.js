const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("List-container");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const inputValue = inputbox.value.trim();
    if (inputValue !== '') {

        const listItem = document.createElement("li");
        listItem.textContent = inputValue;
        listcontainer.appendChild(listItem);
        inputbox.value = '';
    } else {
        document.getElementById("texterror");
        alert('this filled are  must be req!..');
    }
});
inputbox.addEventListener("click", () => {
    document.getElementById("texterror").textContent = "";
});