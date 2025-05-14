// Services data
const services = ref([
    {
        icon: 'fas fa-globe',
        title: 'Pembuatan Website Profesional',
        description: 'Website responsif dan modern dengan teknologi terbaru untuk bisnis Anda.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'React']
    },
    {
        icon: 'fas fa-shopping-cart',
        title: 'Toko Online',
        description: 'Platform e-commerce lengkap dengan sistem pembayaran dan manajemen produk.',
        tech: ['Node.js', 'MongoDB', 'Payment API', 'React']
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Aplikasi Mobile',
        description: 'Aplikasi native dan hybrid untuk iOS dan Android dengan performa optimal.',
        tech: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
        icon: 'fas fa-robot',
        title: 'AI Chatbot',
        description: 'Asisten virtual cerdas untuk layanan pelanggan 24/7.',
        tech: ['Python', 'NLP', 'TensorFlow', 'Dialogflow']
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Analitik Bisnis',
        description: 'Dashboard analitik real-time untuk memantau perkembangan bisnis Anda.',
        tech: ['Chart.js', 'D3.js', 'Firebase', 'BigQuery']
    },
    {
        icon: 'fas fa-server',
        title: 'Hosting & Cloud',
        description: 'Solusi hosting dan cloud dengan keamanan dan performa terbaik.',
        tech: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes']
    }
]);

// Make services available globally
window.servicesData = services;
