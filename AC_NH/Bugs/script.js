function populateList() {
    const list = document.getElementById("bug_list");
    const bugs = $.getJSON("bugs.json", (json) => {
        for (const bug of Object.values(json)) {
            let node = document.createElement("LI");
            let textNode = document.createTextNode(bug["id"]);
            node.appendChild(textNode);
            list.appendChild(node);
        }
    });
}

populateList();