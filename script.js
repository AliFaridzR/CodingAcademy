
const form = document.getElementById("formPendaftaran");
const hasil = document.getElementById("hasilPendaftaran");
const detail = document.getElementById("detailPendaftaran");

const tombolEdit = document.getElementById("tombolEdit");
const tombolHapus = document.getElementById("tombolHapus");

let dataPendaftaran = null;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    const yakin = confirm(
        "Apakah Anda sudah yakin untuk menyimpan?"
    );

    if (!yakin) {
        return;
    }

    dataPendaftaran = {
        nik: document.getElementById("nik").value.trim(),
        nama: document.getElementById("nama").value.trim(),
        jenisKelamin: form.querySelector(
            'input[name="jenisKelamin"]:checked'
        ).value,
        hp: document.getElementById("hp").value.trim(),
        alamat: document.getElementById("alamat").value.trim(),
        bahasa: document.getElementById("bahasa").value
    };

    tampilkanData();
});

function tampilkanData() {
    detail.replaceChildren();

    const daftar = document.createElement("dl");

    const data = [
        ["NIK", dataPendaftaran.nik],
        ["Nama Lengkap", dataPendaftaran.nama],
        ["Jenis Kelamin", dataPendaftaran.jenisKelamin],
        ["Nomor HP", dataPendaftaran.hp],
        ["Alamat", dataPendaftaran.alamat],
        ["Bahasa Pemrograman", dataPendaftaran.bahasa]
    ];

    data.forEach(function (item) {
        const label = document.createElement("dt");
        label.textContent = item[0];

        const nilai = document.createElement("dd");
        nilai.textContent = item[1];

        daftar.append(label, nilai);
    });

    detail.appendChild(daftar);

    form.hidden = true;
    hasil.hidden = false;

    hasil.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Edit: kembalikan data ke formulir.
tombolEdit.addEventListener("click", function () {
    if (!dataPendaftaran) return;

    document.getElementById("nik").value = dataPendaftaran.nik;
    document.getElementById("nama").value = dataPendaftaran.nama;
    document.getElementById("hp").value = dataPendaftaran.hp;
    document.getElementById("alamat").value = dataPendaftaran.alamat;
    document.getElementById("bahasa").value = dataPendaftaran.bahasa;

    form.querySelectorAll('input[name="jenisKelamin"]').forEach(
        function (radio) {
            radio.checked = radio.value === dataPendaftaran.jenisKelamin;
        }
    );

    hasil.hidden = true;
    form.hidden = false;

    form.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Hapus: minta konfirmasi sebelum menghapus data.
tombolHapus.addEventListener("click", function () {
    const yakinHapus = confirm(
        "Apakah Anda yakin ingin menghapus data pendaftaran?"
    );

    if (!yakinHapus) {
        return;
    }

    dataPendaftaran = null;
    form.reset();
    hasil.hidden = true;
    form.hidden = false;

    detail.replaceChildren();

    form.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
