class Controls {
    constructor() {
    }

    async getLatestYoutubeVideos() {
        const url = 'https://www.googleapis.com/youtube/v3/videos?id=UCh9NCEDV6XQtAW11EbOgCLw&part=snippet,contentDetails,statistics,status&key=AIzaSyBrezJRjhBoiUe5dtVZ-Vf7DCwds9DZnvs';

        const res = await fetch(url, {
            method: 'GET',
        });

        const json = await res.json();

        console.log(json);
    }
}

const controls = new Controls();