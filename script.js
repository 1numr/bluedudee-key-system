async function getScript() {

    const worker = "https://bludude01.numroxs.workers.dev/"; 

    // 1. Fetch token from Worker
    let res = await fetch(worker + "/getToken");
    let data = await res.json();

    // 2. Send user to your Linkvertise with the token data
    let lv = "https://direct-link.net/1461355/GJzudxc5os2X";

    let redirectURL =
      lv +
      `?token=${data.token}&expiry=${data.expiry}&key=${data.key}`;

    window.location.href = redirectURL;
}
