// Simulasi Request Data Mahasiswa ke Backend API (Delay 1.5 detik)
const fetchStudentDataMock = (isNetworkAvailable) => {
    return new Promise((resolve, reject) => {
        console.log("[Network] Mengirimkan request ke server...");

        setTimeout(() => {
            if (isNetworkAvailable) {
                const mockPayload = {
                    status: "success",
                    data: { nim: "1125102209", name: "M Rifky R", major: "Teknik Informatika" }
                };
                resolve(mockPayload); // Transisi status ke Fulfilled
            } else {
                reject(new Error("503 Service Unavailable: Server Backend Tidak Merespon")); // Rejected
            }
        }, 1500);
    });
};

// Menangani Konsumsi Promise menggunakan .then() dan .catch()
console.log("1. Eksekusi Skrip Dimulai (Synchronous)");

fetchStudentDataMock(true)
    .then((response) => {
        console.log("2. Response Berhasil Diterima:", response.data);
        return response.data.name;
    })
    .then((studentName) => {
        console.log(`3. Memproses Profil Mahasiswa: ${studentName}`);
    })
    .catch((error) => {
        console.error("X. Terjadi Kesalahan Jaringan:", error.message);
    })
    .finally(() => {
        console.log("4. Siklus Transaksi Asinkron Selesai");
    });

console.log("5. Eksekusi Skrip Berlanjut Tanpa Blocking (Synchronous)");