function gantiNama() {
    let name = prompt("masukan nama : ");
    let confirmasi = confirm("Mau ganti contact?");

    // while (name == "" && confirmasi == false || name == "" && confirmasi == true) {
    //     return name;
    // };
    if (name == "" && confirmasi == false) {
        return name;
    }
    else if (name = "" && contact == null) {
        return name;
    }

        document.getElementById("namae").innerText = name;
        if (confirmasi == true ) {
            let contact = prompt("Masukan contact : ");
            if (contact == "") {
                return contact
            }
            document.getElementById("contact").innerText = contact;
        }
    };

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