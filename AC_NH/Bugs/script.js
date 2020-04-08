function updateInfo(insect) {
    document.getElementById("info_img").src = "img/" + insect.img_file;
    document.getElementById("insect_id").innerHTML = insect.id;
    document.getElementById("location").innerHTML = insect.location;
    document.getElementById("time").innerHTML = insect.time;
    document.getElementById("months").innerHTML = insect.months;
    document.getElementById("insect_price").innerHTML = (Number(insect.price)).toLocaleString() + " bells";
    document.getElementById("flick_price").innerHTML = (Number(insect.price) * 1.5).toLocaleString() + " bells";
    document.getElementById("flick_inventory").innerHTML = (Number(insect.price) * 1.5 * 40).toLocaleString() + " bells";
    document.getElementById("inventory_price").innerHTML = (Number(insect.price) * 40).toLocaleString() + " bells";
}

async function addBug(bug) {
    const list = document.getElementById("bug_list");

    // Create the div and style:
    let node = document.createElement("div");
    node.setAttribute('class', 'bug');

    // Create the paragraph:
    let textNode = document.createElement("p");
    textNode.innerHTML = bug["id"];

    node.onclick = () => {
        updateInfo(bug);
    }

    node.appendChild(textNode);
    list.appendChild(node);
}

$.getJSON("https://gaiablade.github.io/AC_NH/Bugs/bugs.json", (json) => {
    updateInfo(json["common_butterfly"]);
    for (const bug of Object.values(json)) {
        addBug(bug);
    }
})