// Initialize Vue app
const { createApp, ref, computed, onMounted } = Vue;

const app = createApp({
    setup() {
        // Mobile menu state
        const menuActive = ref(false);
        const toggleMenu = () => {
            menuActive.value = !menuActive.value;
        };

        return {
            menuActive,
            toggleMenu
        };
    }
});

// Mount the app
app.mount('#app');
