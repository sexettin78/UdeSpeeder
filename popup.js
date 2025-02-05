document.getElementById("applySpeed").addEventListener("click", function () {
    let speed = parseFloat(document.getElementById("speedInput").value);
    if (!isNaN(speed) && speed > 0) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: (newSpeed) => {
                    let video = document.querySelector("video");
                    if (video) {
                        video.playbackRate = newSpeed;
                    } else {
                        alert("Video bulunamadı!");
                    }
                },
                args: [speed]
            });
        });
    } else {
        alert("Lütfen geçerli bir hız girin!");
    }
});
