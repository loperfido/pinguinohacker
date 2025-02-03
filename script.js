document.addEventListener('DOMContentLoaded', () => {
    // Aggiunge effetto neve al background
    createSnowflakes();
    animateCounters();
    initProgressBars();
    
    // Easter egg quando si fa click sul titolo
    document.querySelector('h1').addEventListener('click', () => {
        alert('🐧 SQUAWK! Hai trovato un pinguino hacker segreto! 🐧');
    });

    // Easter egg quando si fa doppio click sul logo
    document.querySelector('h1').addEventListener('dblclick', () => {
        document.body.classList.add('matrix-mode');
        alert('Modalità Matrix Pinguino attivata! 🐧⚡');
    });

    // Easter egg per i dettagli FAQ
    const details = document.querySelectorAll('details');
    details.forEach(detail => {
        detail.addEventListener('toggle', () => {
            if (detail.open) {
                const emoji = ['🐧', '🐠', '❄️', '🎩', '🧊'];
                detail.querySelector('p').innerHTML += ` ${emoji[Math.floor(Math.random() * emoji.length)]}`;
            }
        });
    });
});

function createSnowflakes() {
    const numberOfSnowflakes = 50;
    
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random();
        snowflake.innerHTML = '❄';
        document.body.appendChild(snowflake);
    }
}

// Animazione contatori
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 secondi
        const step = target / (duration / 50);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.round(current);
                setTimeout(updateCounter, 50);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Animazione barre di progresso
function initProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        const progress = bar.dataset.progress;
        const progressElement = bar.querySelector('.progress');
        progressElement.style.width = `${progress}%`;
    });
}

// Aggiunge stili per i fiocchi di neve direttamente nel documento
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .snowflake {
        position: fixed;
        color: #fff;
        font-size: 1em;
        pointer-events: none;
        animation: fall linear infinite;
    }

    @keyframes fall {
        0% {
            transform: translateY(-100vh);
        }
        100% {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(styleSheet);

// Easter eggs aggiuntivi
document.addEventListener('konami', () => {
    document.body.style.transform = 'rotate(180deg)';
    alert('🐧 Modalità Pinguino Attivata: Tutto sottosopra! 🙃');
});

// Gestione banner cookie
setTimeout(() => {
    const banner = document.querySelector('.cookie-banner');
    banner.addEventListener('click', () => {
        banner.innerHTML = "🐟 Grazie! Il tuo pesce è stato requisito con successo!";
        setTimeout(() => banner.style.display = 'none', 2000);
    });
}, 2000);
