// TẠO HIỆU ỨNG KHI CUỘN TRANG

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

// Theo dõi các phần tử có class reveal

document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});
