let json = {
    "common_butterfly": {
        "id": "Common butterfly",
        "img_file": "common_buttefly.png",
        "price": "?"
    },
    "yellow_butterfly": {
        "id": "Yellow butterfly",
        "img_file": "yellow_butterfly.png",
        "price": "?"
    },
    "tiger_butterfly": {
        "id": "Tiger butterfly",
        "img_file": "tiger_butterfly.png",
        "price": "?"
    },
    "peacock_butterfly": {
        "id": "Peacock butterfly",
        "img_file": "peacock_butterfly.png",
        "price": "2500"
    },
    "common_bluebottle": {
        "id": "Common bluebottle",
        "img_file": "common_bluebottle.png",
        "price": "?"
    },
    "paper_kite_butterfly": {
        "id": "Paper kite butterfly",
        "img_file": "paper_kite_butterfly.png",
        "price": "?"
    },
    "?1": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?2": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "emperor_butterfly": {
        "id": "Emperor butterfly",
        "img_file": "emperor_butterfly.png",
        "price": "4000"
    },
    "agrias_butterfly": {
        "id": "Agrias butterfly",
        "img_file": "agrias_butterfly.png",
        "price": "?"
    },
    "rajah_brooke's_birdwing": {
        "id": "Rajah Brooke's birdwing",
        "img_file": "rajah_brookes_birdwing.png",
        "price": "?"
    },
    "?3": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "moth": {
        "id": "Moth",
        "img_file": "moth.png",
        "price": "?"
    },
    "atlas_moth": {
        "id": "Atlas moth",
        "img_file": "atlas_moth.png",
        "price": "?"
    },
    "madagascan_sunset_moth": {
        "id": "Madagascan sunset moth",
        "img_file": "madagascan_sunset_moth.png",
        "price": "?"
    },
    "long_locust": {
        "id": "Long locust",
        "img_file": "long_locust.png",
        "price": "?"
    },
    "?4": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?5": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?6": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?7": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?8": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "mantis": {
        "id": "Mantis",
        "img_file": "mantis.png",
        "price": "?"
    },
    "orchid_mantis": {
        "id": "Orchid mantis",
        "img_file": "orchid_mantis.png",
        "price": "?"
    },
    "honeybee": {
        "id": "Honeybee",
        "img_file": "honeybee.png",
        "price": "?"
    },
    "wasp": {
        "id": "Wasp",
        "img_file": "wasp.png",
        "price": "?"
    },
    "?9": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?10": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?11": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?12": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?13": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?14": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?15": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "darner_dragonfly": {
        "id": "Darner dragonfly",
        "img_file": "darner_dragonfly.png",
        "price": "?"
    },
    "?16": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?17": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?18": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?19": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?20": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "?21": {
        "id": "?",
        "img_file": "?",
        "price": "?"
    },
    "giant_water_bug": {
        "id": "Giant water bug",
        "img_file": "giant_water_bug.png",
        "price": "?"
    }
};

for (let obj of Object.values(json)) {
    obj["location"] = "";
}

let string = JSON.stringify(json, null, 2);

console.log(string);