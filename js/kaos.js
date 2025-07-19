let totalDeg = 0;

spinWheel = () => {

    const spinAudio = document.getElementById("spinSound");
    spinAudio.currentTime = 0;
    spinAudio.volume = 1; // 
    spinAudio.play();

    
    setTimeout(() => {
        let fade = setInterval(() => {
            if (spinAudio.volume > 0.1) {
                spinAudio.volume -= 0.1;
            } else {
                spinAudio.volume = 0;
                clearInterval(fade);
                spinAudio.pause();
            }
        }, 100); 
    }, 3800);

    let selectedPrize;
    const chance = Math.floor(Math.random() * 20); // 0–19
    if (chance === 0) {
        selectedPrize = "KAOS";
    } else {
        const otherPrizes = ["KOREK", "FREE SPIN", "COBA LAGI", "STICKER"];
        selectedPrize = otherPrizes[Math.floor(Math.random() * otherPrizes.length)];
    }

    let targetDeg = 0;
    if (selectedPrize === "KOREK") {
        targetDeg = Math.random() < 0.5
            ? getRandomBetween(337, 360)
            : getRandomBetween(0, 22);
    } else if (selectedPrize === "FREE SPIN") {
        targetDeg = getRandomBetween(67, 112);
    } else if (selectedPrize === "COBA LAGI") {
        targetDeg = getRandomBetween(202, 247);
    } else if (selectedPrize === "STICKER") {
        targetDeg = getRandomBetween(247, 292);
    } else if (selectedPrize === "KAOS") {
        targetDeg = getRandomBetween(157, 202);
    }

    const currentDeg = totalDeg % 360;
    const fullSpins = 10;
    const extraDeg = (targetDeg - currentDeg + 360) % 360;
    const spinDeg = fullSpins * 360 + extraDeg;

    totalDeg += spinDeg;

    const wheel = document.getElementById("wheel");
    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = `rotate(${totalDeg}deg)`;

    setTimeout(() => {
        showPopup(selectedPrize);
    }, 5200);
};
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function showPopup(prizeName) {
    const imageMap = {
        "KOREK": "assets/korek.png",
        "FREE SPIN": "assets/freespin.png",
        "COBA LAGI": "assets/cobalagi.png",
        "KAOS": "assets/kaos.png",
        "ASBAK": "assets/asbak.png",
        "STICKER" : "assets/sticker.png"
    };

    const goodPrizes = ["KAOS", "ASBAK", "KOREK","STICKER"];
    const zonkPrizes = ["FREE SPIN", "COBA LAGI"];

    // Tentukan suara mana yang dimainkan
    if (goodPrizes.includes(prizeName)) {
        document.getElementById("goodSound").play();
    } else if (zonkPrizes.includes(prizeName)) {
        document.getElementById("zonkSound").play();
    }

    const popup = document.getElementById("popup");
    const image = document.getElementById("popup-image");

    image.src = imageMap[prizeName] || "";

    popup.classList.remove("hide");
    popup.style.display = "flex";

    // Trigger ulang animasi zoomIn
    void popup.offsetWidth;
    popup.classList.add("show");
}

document.getElementById("popup").addEventListener("click", function () {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
    popup.classList.add("hide");

    setTimeout(() => {
        popup.style.display = "none";
        popup.classList.remove("hide");

        // 🔊 Hentikan suara saat popup ditutup
        ["goodSound", "zonkSound"].forEach(id => {
            const audio = document.getElementById(id);
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });

    }, 400); // durasi animasi
});


document.getElementById("popup-image").addEventListener("click", function (e) {
  e.stopPropagation();
});


function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
    popup.classList.add("hide");

    setTimeout(() => {
        popup.style.display = "none";
        popup.classList.remove("hide");

        // 🔊 Stop audio di sini juga
        ["goodSound", "zonkSound"].forEach(id => {
            const audio = document.getElementById(id);
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });

    }, 500);
}



let highlighter = "";
for (let h = 1; h < 73; h++) {
    highlighter += '<span style="--h:' + h + '"></span>';
}
document.querySelector(".highlighter").innerHTML = highlighter;
