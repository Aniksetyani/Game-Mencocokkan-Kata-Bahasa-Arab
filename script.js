let selectedCards = [];
let matchPairs = {
    "farasha": "kupu_kupu",
    "wird": "bunga",
    "shajara": "pohon"
};

function selectCard(card, value) {
    // Tambahkan kartu ke array yang dipilih
    selectedCards.push({ card, value });

    // Ubah tampilan kartu saat dipilih
    card.style.backgroundColor = "#d4edda";

    // Periksa jika ada dua kartu yang dipilih
    if (selectedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    let [first, second] = selectedCards;

    if (matchPairs[first.value] === second.value || matchPairs[second.value] === first.value) {
        alert("Cocok!");
        first.card.style.visibility = "hidden";
        second.card.style.visibility = "hidden";
    } else {
        alert("Tidak Cocok!");
        first.card.style.backgroundColor = "#f0f0f0";
        second.card.style.backgroundColor = "#f0f0f0";
    }
    selectedCards = [];
}
