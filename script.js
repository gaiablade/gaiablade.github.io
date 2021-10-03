class Controls {
    constructor() {
    }

    async loadYoutubeHistory() {
        /*
        const html = await fetch('https://www.youtube.com/user/papermario231/videos', {
            method: 'GET',
            mode: 'no-cors'
        }).then(res => res.text());
        console.log(html);
        */
        //fetch('https://www.youtube.com/user/papermario231/videos', {
        fetch('https://www.google.com/', {
            method: 'GET',
        }).then(res => console.log(res));
    }
}

const controls = new Controls();