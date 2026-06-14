const tabs = document.querySelectorAll(".tab");

const contents =
document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Hapus active dari semua tab
        tabs.forEach(item => {
            item.classList.remove("active");
        });

        // Hapus active dari semua content
        contents.forEach(content => {
            content.classList.remove("active");
        });

        // Active pada tab yang diklik
        tab.classList.add("active");

        // Ambil data-tab
        const target = tab.dataset.tab;

        // Tampilkan content yang sesuai
        document
            .getElementById(target)
            .classList.add("active");

    });

});