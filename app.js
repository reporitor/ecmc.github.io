// Import Vue (pastikan Vue sudah tersedia dalam bundel atau diimpor)
const { createApp, ref } = Vue; // Pastikan Anda hanya mengimpor apa yang diperlukan

// Initialize Vue app
const app = createApp({
    setup() {
        // Mobile menu state
        const menuActive = ref(false); // Menggunakan reaktifitas Vue 3
        const toggleMenu = () => {
            menuActive.value = !menuActive.value; // Perubahan nilai menggunakan `.value`
        };

        return {
            menuActive,
            toggleMenu
        };
    }
});

// Mount the app
app.mount('#app'); // Pastikan elemen dengan id `app` ada di file HTML
