document.addEventListener("DOMContentLoaded", function() {
    const bloqueo = document.getElementById("bloqueo");
    const topBloqueo = bloqueo.offsetTop;

    let isThrottled = false;

    function checkScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop >= topBloqueo) {
            window.scrollTo({
                top: topBloqueo,
                behavior: 'smooth'
            });
        }

        isThrottled = false;
    }

    document.addEventListener("scroll", function() {
        if (!isThrottled) {
            requestAnimationFrame(checkScroll);
            isThrottled = true;
        }
    });
});
