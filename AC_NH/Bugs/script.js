function populateList() {
    const list = document.getElementById("bug_list");
    const jsonFile = $.getJSON("bugs.json", (json) => {
        console.log(json);
    })
}

populateList();