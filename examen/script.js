document.getElementById('download').addEventListener('click', function() {
    alert('Descargando documento');
});

document.getElementById('contact').addEventListener('click', function() {
    window.location.href = 'mailto:contact@me.com';
});

const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(icon.href, '_blank');
    });
});