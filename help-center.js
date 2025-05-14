// AI Help Center data
const activeCategory = ref('general');
const setActiveCategory = (category) => {
    activeCategory.value = category;
};

const popularArticles = ref([
    { icon: 'fas fa-question-circle', title: 'Cara Membuat Website Pertama Anda', summary: 'Panduan langkah demi langkah untuk membuat website profesional.' },
    { icon: 'fas fa-credit-card', title: 'Metode Pembayaran yang Didukung', summary: 'Daftar lengkap metode pembayaran yang tersedia di platform kami.' },
    { icon: 'fas fa-chart-line', title: 'Menganalisis Data Pelanggan', summary: 'Cara menggunakan dashboard analitik untuk memahami pelanggan Anda.' }
]);

const userMessage = ref('');
const aiResponse = ref('');

const selectArticle = (article) => {
    userMessage.value = article.title;
    sendMessage();
};

const sendMessage = () => {
    if (!userMessage.value.trim()) return;
    
    // Simulate AI response
    const responses = {
        general: [
            "Zall Web Solutions menyediakan berbagai layanan digital untuk UMKM, termasuk pembuatan website, toko online, dan sistem pembayaran.",
            "Anda dapat menghubungi tim support kami melalui email support@zallweb.com atau WhatsApp di +62 123 4567 890.",
            "Untuk informasi lebih lanjut tentang layanan kami, silakan kunjungi halaman layanan di website kami."
        ],
        website: [
            "Pembuatan website di Zall Web Solutions menggunakan teknologi terbaru seperti Vue.js dan React untuk performa optimal.",
            "Proses pembuatan website biasanya memakan waktu 2-4 minggu tergantung kompleksitas proyek.",
            "Kami menyediakan template kustom atau bisa juga desain dari awal sesuai kebutuhan bisnis Anda."
        ],
        payment: [
            "Kami mendukung berbagai metode pembayaran termasuk transfer bank, e-wallet (OVO, GoPay, Dana), dan kartu kredit.",
            "Biaya transaksi bervariasi tergantung metode pembayaran, mulai dari 1.5% - 2.9% per transaksi.",
            "Pembayaran akan diproses secara real-time dan dana akan masuk ke rekening Anda dalam 1-3 hari kerja."
        ],
        account: [
            "Untuk mengubah informasi akun, silakan login dan buka halaman pengaturan profil.",
            "Jika lupa password, Anda bisa menggunakan fitur reset password di halaman login.",
            "Upgrade akun ke versi premium bisa dilakukan melalui dashboard dengan memilih paket yang tersedia."
        ],
        technical: [
            "Jika mengalami masalah teknis, silakan coba clear cache browser atau gunakan browser berbeda.",
            "Untuk masalah yang lebih kompleks, tim teknis kami siap membantu via live chat atau ticket support.",
            "Rata-rata waktu respon untuk masalah teknis adalah 2-4 jam pada jam kerja."
        ]
    };

    const randomResponse = responses[activeCategory.value][Math.floor(Math.random() * responses[activeCategory.value].length)];
    
    // Simulate typing effect
    aiResponse.value = '';
    let i = 0;
    const typingEffect = setInterval(() => {
        aiResponse.value += randomResponse[i];
        i++;
        if (i >= randomResponse.length) {
            clearInterval(typingEffect);
        }
    }, 30);
};

// Make help center functions available globally
window.helpCenterData = {
    activeCategory,
    setActiveCategory,
    popularArticles,
    selectArticle,
    userMessage,
    aiResponse,
    sendMessage
};
