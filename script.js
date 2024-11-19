const universities = [
    { name: "Universitas Indonesia", program: "Teknik Informatika", snbp: -, snbt: - },
    { name: "Institut Teknologi Bandung", program: "Teknik Mesin", snbp: -, snbt: - },
    { name: "Universitas Gadjah Mada", program: "Kedokteran", snbp: -, snbt: - },
    { name: "Universitas Andalas", program: "Hukum", snbp: -, snbt: - },
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
