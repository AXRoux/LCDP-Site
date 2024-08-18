document.addEventListener('DOMContentLoaded', function() {
    const vaultHeader = document.getElementById('vault-header');
    const translations = {
        'English': 'Vault',
        'Spanish': 'Bóveda',
        'French': 'Coffre-fort',
        'German': 'Tresor',
        'Italian': 'Caveau',
        'Portuguese': 'Cofre',
        'Russian': 'Хранилище',
        'Japanese': '金庫',
        'Chinese': '保险库',
        'Korean': '금고'
    };

    const languages = Object.keys(translations);
    let currentIndex = 0;

    function translateVault() {
        const currentLanguage = languages[currentIndex];
        const translation = translations[currentLanguage];
        
        vaultHeader.textContent = translation;
        vaultHeader.setAttribute('data-language', currentLanguage);

        currentIndex = (currentIndex + 1) % languages.length;
    }

    // Translate every 20 seconds
    setInterval(translateVault, 20000);

    // Initial translation
    translateVault();
});