document.addEventListener("DOMContentLoaded", function() {
    const rangeMin = document.querySelector('.range-min');
    const rangeMax = document.querySelector('.range-max');
    const inputMin = document.querySelector('.input-min');
    const inputMax = document.querySelector('.input-max');
    const progress = document.querySelector('.progress');

    function updateSlider() {
        const minValue = parseInt(rangeMin.value);
        const maxValue = parseInt(rangeMax.value);
        const minPercent = (minValue / rangeMin.max) * 100;
        const maxPercent = (maxValue / rangeMax.max) * 100;

        progress.style.left = `${minPercent}%`;
        progress.style.right = `${100 - maxPercent}%`;

        inputMin.value = minValue;
        inputMax.value = maxValue;
    }

    rangeMin.addEventListener('input', function() {
        if (parseInt(this.value) >= parseInt(rangeMax.value)) {
            this.value = rangeMax.value - 1; // Ajusta el valor mínimo si es igual o mayor que el máximo
        }
        updateSlider();
    });

    rangeMax.addEventListener('input', function() {
        if (parseInt(this.value) <= parseInt(rangeMin.value)) {
            this.value = parseInt(rangeMin.value) + 1; // Ajusta el valor máximo si es igual o menor que el mínimo
        }
        updateSlider();
    });

    inputMin.addEventListener('input', function() {
        const newValue = Math.min(parseInt(this.value), parseInt(rangeMax.value) - 1); // Asegúrate de que no supere el máximo
        rangeMin.value = newValue;
        this.value = newValue; // Sincroniza el campo de entrada
        updateSlider();
    });

    inputMax.addEventListener('input', function() {
        const newValue = Math.max(parseInt(this.value), parseInt(rangeMin.value) + 1); // Asegúrate de que no sea menor que el mínimo
        rangeMax.value = newValue;
        this.value = newValue; // Sincroniza el campo de entrada
        updateSlider();
    });

    updateSlider(); // Llamada inicial para configurar los valores
});