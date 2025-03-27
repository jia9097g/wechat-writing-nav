// 搜索功能
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const cards = document.querySelectorAll('.card');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let hasResults = false;
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const isMatch = title.includes(searchTerm) || description.includes(searchTerm);
            
            card.classList.toggle('hidden', !isMatch);
            if (isMatch) hasResults = true;
        });
        
        // 处理无搜索结果的情况
        document.querySelectorAll('.no-results').forEach(el => el.remove());
        if (!hasResults) {
            const sections = document.querySelectorAll('.category');
            sections.forEach(section => {
                const cardsVisible = section.querySelectorAll('.card:not(.hidden)').length;
                if (cardsVisible === 0) {
                    const noResults = document.createElement('div');
                    noResults.className = 'no-results';
                    noResults.textContent = '没有找到相关结果';
                    section.querySelector('.cards').appendChild(noResults);
                }
            });
        }
    }
    
    // 搜索按钮点击事件
    searchButton.addEventListener('click', performSearch);
    
    // 输入框回车事件
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 输入框清空时显示所有卡片
    searchInput.addEventListener('input', () => {
        if (searchInput.value === '') {
            cards.forEach(card => card.classList.remove('hidden'));
            document.querySelectorAll('.no-results').forEach(el => el.remove());
        }
    });
}

// 页面加载完成后初始化搜索功能
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
    
    // 平滑滚动功能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
