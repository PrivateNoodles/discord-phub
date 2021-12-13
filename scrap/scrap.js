//setup the fetch

(async() => {
    const config = {
        name: "lgbt-transgender",
        extension: ["gif", "mp4", "mkv", "png", "jpg", "jpeg"],
        max: 1500
    }

    function downloadObjectAsJson(exportObj, exportName) {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    let count = 0;
    let before = false;
    const limit = 100;
    let img = [];

    const token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();

    while (count < config.max) {
        let cache = [];

        try {
            //+ limit + (before ? before : "")
            const req = await fetch;

            const rep = await req.json();

            rep.forEach((element) => {
                const res = element.attachments.map((attachement) => {
                    let have = false;

                    config.extension.forEach((extension) => {
                        if (attachement.url.includes(extension)) have = attachement.url;
                    });

                    return have;
                });
                if (res && res.length != 0 && res[0] != false) cache = cache.concat(res);
            });

            console.log(rep);

            before = "&before=" + rep[0].id;
            img = img.concat(cache);
        } catch (e) {
            console.warn(e);
            count = config.max;
        }

        count += cache.length;
    }

    downloadObjectAsJson(img, config.name);
})();