function populateList() {
    const list = document.getElementById("bug_list");
    const bugs = $.getJSON("bugs.json", (json) => {
        console.log(json);
    });
    console.log(bugs);
    for (const bug of Object.values(bugs)) {
        /*
        let node = document.createElement("LI");
        let textNode = document.createTextNode(bug["id"]);
        node.appendChild(textNode);
        list.appendChild(node);
        */
    }
}

populateList();