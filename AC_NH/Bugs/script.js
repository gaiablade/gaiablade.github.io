function updateInfo(insect) {
    document.getElementById("insect_id").innerHTML = insect.id;
    document.getElementById("insect_price").innerHTML = insect.price;
}

function populateList() {
    const list = document.getElementById("bug_list");
    const bugs = $.getJSON("bugs.json", (json) => {
        for (const bug of Object.values(json)) {
            let node = document.createElement("LI");
            let imgNode = document.createElement("IMG");
            imgNode.src = "img/" + bug.img_file;
            let textNode = document.createElement("P");
            textNode.innerHTML = bug["id"];
            node.onclick = () => {
                updateInfo(bug);
            }
            if (bug.img_file != "?") {
                node.appendChild(imgNode);
            }
            node.appendChild(textNode);
            list.appendChild(node);
        }
    });
}

populateList();