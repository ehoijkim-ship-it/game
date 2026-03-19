// Main Game Portal Lobby Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Game Portal Lobby Loaded');
    
    // 우클릭 방지
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        alert('보안을 위해 우클릭이 제한되어 있습니다.');
    });

    // 키보드 단축키 방지 (F12, Ctrl+U, Ctrl+Shift+I 등)
    document.addEventListener('keydown', (e) => {
        // F12 키 차단
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (개발자 도구) 차단
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (소스 보기) 차단
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
    });

    // Future expansion: 
    // - Dark mode toggle
    // - Search functionality
    // - Dynamic game loading
});
