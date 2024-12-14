document.addEventListener("DOMContentLoaded", function() {
    const matrixElement = document.querySelector('.matrix');
    const columns = Math.floor(window.innerWidth / 20); // Розрахунок кількості стовпців
    const rows = Math.floor(window.innerHeight / 20);  // Розрахунок кількості рядків

    let matrixContent = '';

    // Генерація стовпців з випадковими символами
    for (let col = 0; col < columns; col++) {
        let column = '<div class="column">';
        for (let row = 0; row < rows; row++) {
            const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 94)); // Випадковий символ
            column += <span>${randomChar}</span>;
        }
        column += '</div>';
        matrixContent += column;
    }

    matrixElement.innerHTML = matrixContent;

    // Анімація для кожного стовпця
    const columnsElements = document.querySelectorAll('.column');
    columnsElements.forEach((col, index) => {
        col.style.animationDuration = ${Math.random() * 3 + 2}s; // Рандомна швидкість для кожного стовпця
        col.style.animationDelay = ${Math.random() * 2}s; // Рандомна затримка для кожного стовпця
    });
});