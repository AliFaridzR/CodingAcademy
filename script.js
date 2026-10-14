
const form = document.getElementById("formPendaftaran");
const hasil = document.getElementById("hasilPendaftaran");
const detail = document.getElementById("detailPendaftaran");
const tombolKembali = document.getElementById("tombolKembali");

form.addEventListener("submit", function (event) {
    // Mencegah form langsung dikirim atau halaman dimuat ulang.
    event.preventDefault();

    // Tampilkan dialog konfirmasi.
    const yakin = confirm("Apakah Anda sudah yakin untuk menyimpan?");

    // Jika memilih Tidak, batalkan proses.
    if (!yakin) {
        return;
    }

    // Ambil data dari formulir.
    const nik = document.getElementById("nik").value.trim();
    const nama = document.getElementById("nama").value.trim();
    const jenisKelamin =
        form.querySelector('input[name="jenisKelamin"]:checked').value;
    const hp = document.getElementById("hp").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const bahasa = document.getElementById("bahasa").value;

    // Buat daftar data hasil pendaftaran.
    const data = [
        ["NIK", nik],
        ["Nama Lengkap", nama],
        ["Jenis Kelamin", jenisKelamin],
        ["Nomor HP", hp],
        ["Alamat", alamat],
        ["Bahasa Pemrograman", bahasa]
    ];

    // Kosongkan hasil sebelumnya.
    detail.replaceChildren();

    // Tampilkan data dengan aman sebagai teks.
    const daftar = document.createElement("dl");

    data.forEach(function (item) {
        const label = document.createElement("dt");
        label.textContent = item[0];

        const nilai = document.createElement("dd");
        nilai.textContent = item[1];

        daftar.append(label, nilai);
    });

    detail.appendChild(daftar);

    // Tampilkan hasil dan sembunyikan formulir.
    form.hidden = true;
    hasil.hidden = false;

    // Arahkan pengguna ke hasil pendaftaran.
    hasil.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Tombol untuk kembali dan mengubah data.
tombolKembali.addEventListener("click", function () {
    hasil.hidden = true;
    form.hidden = false;

    form.scrollIntoView({ behavior: "smooth", block: "start" });
});
