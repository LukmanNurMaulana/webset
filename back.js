let namaDefault = document.getElementById("namae");
let contactDefault = document.getElementById("contact");

function gantiNama() {
    let input = prompt("Masukan Nama Baru : ");
    let namaBaru = input;

    if (input.trim() == "" || input == null) {
        input = namaDefault;
    }
    else {
        namaDefault.innerText = namaBaru;
    }
};

function gantiContact() {
    let input = prompt("masukan contact : ");
    let contactBaru = input;
    
    if (input.trim() == "" || input == null) {
        input = contactDefault
    }
    else {
        contactDefault.innerText = contactBaru
    }
}

let gambars = ["kacamata.png", "rafaelaaa.jpg", "yofukasi2.jpg"];
let gambarNow = 0;

function gantiGambar() {
    const header = document.getElementById("headerku");

    if (gambarNow == gambars.length) {
        gambarNow = 0;
    }

    header.style.backgroundImage = `linear-gradient(to right, #171717 0%, rgba(23, 23, 23, 0.0) 100%), url('${gambars[gambarNow]}')`;
    gambarNow += 1;
};
