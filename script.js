const universities = [
    { name: "Universitas Indonesia", program: "Teknik Informatika", snbp: 90, snbt: 85 },
    { name: "Institut Teknologi Bandung", program: "Teknik Mesin", snbp: 92, snbt: 88 },
    { name: "Universitas Gadjah Mada", program: "Kedokteran", snbp: 94, snbt: 90 },
    { name: "Universitas Andalas", program: "Hukum", snbp: 88, snbt: 82 },
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
