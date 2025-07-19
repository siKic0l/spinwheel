spinWheel = () => {
    let x = 1024, // min value
        y = 9999; // max value

        let deg = (Math.floor(Math.random() * (y-x)) + x);

        document.getElementById("wheel").style.transform = "rotate(" + deg + "deg)"

        setTimeout(() => {
            if( deg > 360 ){
                deg %= 360;
            }
            
            let amt = "";
            if ( deg >= 337 || deg <22 ) amt = "KOREK";
            if ( deg >= 22 && deg <67 ) amt = "TAS";
            if ( deg >= 67 && deg <112 ) amt = "FREE SPIN";
            if ( deg >= 112 && deg <157 ) amt = "JACKET";
            if ( deg >= 157 && deg <202 ) amt = "KAOS";
            if ( deg >= 202 && deg <247 ) amt = "COBA LAGI";
            if ( deg >= 247 && deg <292 ) amt = "STICKER";
            if ( deg >= 292 && deg <337 ) amt = "ASBAK";

            alert("SELAMAT ANDA MENDAPATKAN!! " + amt);
        }, 5000); 
}
let highlighter = "";
for (let h=1; h<73; h++){
    highlighter += '<span style="--h:'+h+'"></span>'
}

document.querySelector(".highlighter").innerHTML=highlighter;