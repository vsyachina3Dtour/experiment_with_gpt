// Инициализация виртуального тура с помощью krpano
function initializeTour() {
    embedpano({
        swf: "tour.swf",          // Путь к Flash-файлу, если он используется (для старых браузеров)
        xml: "main.xml",          // Путь к основному XML-файлу тура
        target: "pano",           // ID контейнера, в котором будет отображаться тур
        html5: "auto",            // Использовать HTML5, если это возможно
        mobilescale: 1.0,         // Масштабирование для мобильных устройств
        passQueryParameters: true // Передача параметров запроса в krpano
    });
}

// Выполняем инициализацию тура при загрузке страницы
document.addEventListener("DOMContentLoaded", initializeTour);
