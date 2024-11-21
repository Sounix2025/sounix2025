const universities = [
    { name: "Universitas Andalas", program: "Kimia", snbp: 89, snbt:620.1  },
    { name: "Institut Teknologi Sumatera", program: "Teknik Geofisika", snbp: 87.5, snbt: 0 },
    { name: "Universitas Negeri Padang", program: "Pendidikan Kimia", snbp: 91, snbt: 0 },
    { name: "Universitas Riau", program: "PGSD", snbp: 0, snbt: 528.55 },
    { name: "Universitas Syiah Kuala", program: "Teknik Kimia", snbp: 86, snbt: 0 },
    { name: "Universitas Negeri Padang", program: "Pendidikan Ekonomi", snbp: 0, snbt: 509.32 },
    { name: "Universitas Negeri Padang", program: "PGSD", snbp: 0, snbt: 570 },
    { name: "Politeknik Pertanian Negeri Payakumbuh", program: "Politeknik Pertanian Negeri Payakumbuh", snbp:  84.67, snbt: 0 },
    { name: "IPB University", program: "Teknologi & Manajemen Perikanan Budidaya", snbp: 88, snbt: 0 },
    { name: "Universitas Negeri Padang", program: "Fisika", snbp: 81, snbt: 612 },
    { name: "Universitas Negeri Padang", program: "Pendidikan Kimia", snbp: 89.94, snbt: 0 },
    { name: "Universitas Islam Negeri Sjech M. Djamil Djambek Bukittinggi", program: "Komunikasi & Penyiaran Islam", snbp: 85, snbt: 0 },
    { name: "Universitas Negeri Padang", program: "Teknologi Pendidikan", snbp: 0, snbt: 523.91 },
    { name: "Universitas Andalas", program: "Ekonomi(kampus payakumbuh)", snbp: 0, snbt: 536.66 },
    { name: "Universitas Negeri Padang", program: "PJOK", snbp: 0, snbt: 460 },
    { name: "Universitas Riau", program: "PGSD", snbp: 0, snbt: 528.55 },
    { name: "Sekolah Tinggi Teknologi Payakumbuh", program: "Informatika", snbp: 86.89, snbt: 0 },
    { name: "Poltekes Kemenkes Padang", program: "Kebidanan", snbp: 85.24, snbt: 0 },
    { name: "Institut Seni Surakarta", program: "Film dan telvisi", snbp: 0, snbt: 583.67 },
    { name: "UIN sjech m djamil djambek ", program: "Perbankan Syariah", snbp: 82.94, snbt: 0 },
    { name: "Politeknik Negeri Medan ", program: "Teknik Perancangan Jalan", snbp: 0, snbt: 570 },
    { name: "Universitas Negeri Padang ", program: "Teknologi Pendidikan", snbp: 0, snbt: 523.91 },
    { name: "UIN Mahmud Yunus ", program: "Pendidikan Bahasa Inggris", snbp: 86.96, snbt: 0 },
    { name: "uNiversitas Bengkulu ", program: "Farmasi", snbp: 0, snbt: 566.11 },
    { name: "Universita Riau ", program: "Administrasi Bisnis", snbp: 0, snbt: 517.54 },
    { name: "Universitas Negeri Padang ", program: "Kimia", snbp: 0, snbt: 520.75 },
    { name: "Universitas Negeri Padang ", program: "Kimia", snbp: 0, snbt: 520.75 },

];

const searchInput = document.getElementById("search");
const universityList = document.getElementById("university-list");

// Fungsi untuk menampilkan universitas
function tampilkanUniversitas(data) {
    universityList.innerHTML = "";
    data.forEach((uni) => {
        const li = document.createElement("li");
        li.textContent = `${uni.name} - ${uni.program} (SNBP: ${uni.snbp}, SNBT: ${uni.snbt})`;
        universityList.appendChild(li);
    });
}

// Tampilkan data awal
tampilkanUniversitas(universities);

// Fungsi pencarian
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = universities.filter((uni) =>
        uni.name.toLowerCase().includes(query) || uni.program.toLowerCase().includes(query)
    );
    tampilkanUniversitas(filtered);
});
// Fungsi untuk mengurutkan data universitas berdasarkan nama
function urutkanUniversitas(data) {
    return data.sort((a, b) => a.name.localeCompare(b.name));
}

// Tampilkan data awal yang telah diurutkan
tampilkanUniversitas(urutkanUniversitas(universities));

// Fungsi pencarian yang juga mengurutkan hasilnya
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = universities.filter((uni) =>
        uni.name.toLowerCase().includes(query) || uni.program.toLowerCase().includes(query)
    );
    tampilkanUniversitas(urutkanUniversitas(filtered));
});
