// Dashboard data
const dashboardRange = ref('7days');
const recentOrders = ref([
    { id: 'ORD-1289', date: '12 Jun 2023', customer: 'Budi Santoso', amount: 1250000, status: 'completed', statusText: 'Completed' },
    { id: 'ORD-1288', date: '11 Jun 2023', customer: 'Ani Wijaya', amount: 750000, status: 'completed', statusText: 'Completed' },
    { id: 'ORD-1287', date: '10 Jun 2023', customer: 'Citra Dewi', amount: 1850000, status: 'pending', statusText: 'Pending' },
    { id: 'ORD-1286', date: '9 Jun 2023', customer: 'Doni Pratama', amount: 950000, status: 'completed', statusText: 'Completed' },
    { id: 'ORD-1285', date: '8 Jun 2023', customer: 'Eva Susanti', amount: 2200000, status: 'failed', statusText: 'Failed' }
]);

const quickActions = ref([
    { icon: 'fas fa-plus', label: 'Tambah Produk', action: 'addProduct' },
    { icon: 'fas fa-file-invoice', label: 'Buat Invoice', action: 'createInvoice' },
    { icon: 'fas fa-chart-pie', label: 'Laporan', action: 'generateReport' },
    { icon: 'fas fa-bell', label: 'Notifikasi', action: 'sendNotification' }
]);

const recentActivities = ref([
    { icon: 'fas fa-shopping-cart', title: 'Pesanan Baru', description: 'Pesanan #ORD-1289 telah diterima', time: '10 menit lalu' },
    { icon: 'fas fa-user-plus', title: 'Pelanggan Baru', description: 'Budi Santoso mendaftar sebagai pelanggan', time: '1 jam lalu' },
    { icon: 'fas fa-file-invoice-dollar', title: 'Pembayaran Diterima', description: 'Pembayaran untuk #ORD-1288 telah diterima', time: '3 jam lalu' },
    { icon: 'fas fa-truck', title: 'Pengiriman', description: 'Pesanan #ORD-1287 telah dikirim', time: '1 hari lalu' }
]);

const performAction = (action) => {
    alert(`Aksi "${action}" akan dijalankan`);
};

// Initialize Chart.js when component mounts
onMounted(() => {
    // Sales Chart
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Pendapatan',
                    data: [8500000, 9200000, 10100000, 11300000, 12450000, 13500000],
                    borderColor: '#e63946',
                    backgroundColor: 'rgba(230, 57, 70, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: function(value) {
                                return 'Rp' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }
});

// Make dashboard functions available globally
window.dashboardData = {
    dashboardRange,
    recentOrders,
    quickActions,
    recentActivities,
    performAction
};
