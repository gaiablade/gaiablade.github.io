function populateList() {
    const list = document.getElementById("bug_list");
    const bugs = $.getJSON("bugs.json", (json) => {
        console.log(json);
    });
    for (const bug of bugs) {
        let node = document.createElement("LI");
        let textNode = document.createTextNode(bug.id);
        node.appendChild(textNode);
        list.appendChild(node);
    }
}

populateList();