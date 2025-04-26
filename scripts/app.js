// 自动初始化功能
document.addEventListener('DOMContentLoaded', () => {
    // 加载游戏数据
    loadGames();
    
    // 编辑器交互
    document.getElementById('edit-toggle').addEventListener('click', () => {
        document.querySelector('.editor-panel').classList.toggle('active');
    });

    // 颜色选择器实时生效
    document.getElementById('titleColor').addEventListener('input', (e) => {
        document.querySelector('h1').style.color = e.target.value;
    });
});