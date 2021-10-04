class Controls {
    constructor() {
    }

    async getLatestYoutubeVideos() {
        const url = 'https://www.googleapis.com/youtube/v3/'
            'channels?key=AIzaSyBrezJRjhBoiUe5dtVZ-Vf7DCwds9DZnvs'
            '&part=contentDetails&id=UCh9NCEDV6XQtAW11EbOgCLw';

        const res = await fetch(url, {
            method: 'GET',
        });

        const json = await res.json();

        console.log(json);
    }
}

const controls = new Controls();