const dropdown = document.querySelector(".wrapper");

dropdown.addEventListener('click', function () {
        this.querySelector('.selectMenu').classList.toggle('open');
});
dropdown.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
       document.querySelector('.selectMenu').classList.toggle('open');
    }
});

for (const option of document.querySelectorAll(".option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.selectMenu').querySelector('.selectMenuTrigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.selectMenu')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});