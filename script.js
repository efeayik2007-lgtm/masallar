const topHeader = document.getElementById("topHeader");
topHeader.addEventListener("mouseover", function() {
    topHeader.style.backgroundColor = "var(--border-subtle)";
});
topHeader.addEventListener("mouseout", function() {
    topHeader.style.backgroundColor = "var(--panel-color)";
});

document.getElementById("welcomeBtn").addEventListener("click", function() {
    const nameVal = document.getElementById("nameInput").value.trim();
    const noticeSpan = document.getElementById("welcomeText");
    if (nameVal === "") {
        alert("Lütfen adınızı giriniz!");
    } else {
        noticeSpan.textContent = "Hoş geldin " + nameVal + ", keyifli okumalar.";
    }
});

document.getElementById("themeBtn").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    const themeButton = document.getElementById("themeBtn");
    themeButton.textContent = document.body.classList.contains("light-theme") ? "Karanlık Mod" : "Aydınlık Mod";
});

let fontSizeMultiplier = 1.125;
document.getElementById("fontUpBtn").addEventListener("click", function() {
    if (fontSizeMultiplier < 1.5) {
        fontSizeMultiplier += 0.1;
        document.documentElement.style.setProperty('--base-font-size', fontSizeMultiplier + 'rem');
    }
});
document.getElementById("fontDownBtn").addEventListener("click", function() {
    if (fontSizeMultiplier > 0.95) {
        fontSizeMultiplier -= 0.1;
        document.documentElement.style.setProperty('--base-font-size', fontSizeMultiplier + 'rem');
    }
});

const taleTabs = document.querySelectorAll('.tale-tab');
taleTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tale-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.story-card').forEach(card => card.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-target')).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase().trim();
    document.querySelectorAll('.tale-tab').forEach(tab => {
        tab.style.display = tab.textContent.toLowerCase().includes(query) ? "" : "none";
    });
});
