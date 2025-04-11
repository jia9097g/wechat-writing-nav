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

// 语言切换功能
function initializeLanguageToggle(langParam) {
    const languageToggle = document.getElementById('languageToggle');
    let currentLanguage = langParam === 'en' ? 'en' : 'zh'; // 根据URL参数设置初始语言
    
    // 如果初始语言是英文，需要先应用英文设置
    if (currentLanguage === 'en') {
        // 延迟应用语言设置，确保页面元素已加载
        setTimeout(() => {
            // 切换到英文
            switchLanguage();
            // 由于切换函数会切换语言，所以需要再切换回来确保是英文
            if (currentLanguage !== 'en') {
                switchLanguage();
            }
        }, 10);
    }
    
    // 翻译数据
    const translations = {
        zh: {
            title: '公众号写作导航 - 你的创作助手',
            header: {
                h1: '公众号写作导航',
                p: '你的一站式公众号创作助手',
                officialLink: '微信公众平台',
                searchPlaceholder: '搜索工具和资源...',
                languageToggle: 'English'
            },
            categories: {
                images: '配图资源',
                design: '海报设计工具',
                editor: '公众号排版工具',
                trending: '热榜工具'
            },
            cards: {
                // 配图资源
                'Pixabay': {
                    description: '全球知名图库，支持中文搜索，商用免费'
                },
                'Unsplash': {
                    description: '高质量风景图片，适合背景和壁纸'
                },
                'StockSnap': {
                    description: '数码类和生活化图片资源'
                },
                'FoodiesFeed': {
                    description: '专业美食摄影图片站点'
                },
                'Visualhunt': {
                    description: '综合图库，支持颜色分类搜索'
                },
                'Burst': {
                    description: '43大类全面图库，带文字说明'
                },
                // 海报设计工具
                'Canva可画': {
                    description: '在线设计协作平台，提供多种设计场景'
                },
                '稿定设计': {
                    description: '专业的在线设计平台，模板丰富'
                },
                '创客贴': {
                    description: '免费模板多，更新快，操作简单'
                },
                '懒人设计': {
                    description: '模板精美，操作简单，种类丰富'
                },
                '图怪兽': {
                    description: '专业海报制作，模板丰富'
                },
                // 公众号排版工具
                '135编辑器': {
                    description: '功能丰富，样式全面，免费够用'
                },
                '秀米编辑器': {
                    description: '界面简洁，小清新风格'
                },
                'i排版': {
                    description: 'SVG黑科技排版，交互效果丰富'
                },
                '壹伴助手': {
                    description: '浏览器插件，原生编辑器增强'
                },
                // 热榜工具
                '新榜': {
                    description: '自媒体数据分析平台'
                },
                '5118大数据': {
                    description: '全网爆款内容挖掘工具'
                },
                '考拉新媒体导航': {
                    description: '综合性新媒体资源导航'
                }
            },
            noResults: '没有找到相关结果',
            footer: '2025 公众号写作导航 | 为创作者提供便利'
        },
        en: {
            title: 'WeChat Writing Navigator - Your Creative Assistant',
            header: {
                h1: 'WeChat Writing Navigator',
                p: 'Your one-stop WeChat creation assistant',
                officialLink: 'WeChat Official Platform',
                searchPlaceholder: 'Search tools and resources...',
                languageToggle: '中文'
            },
            categories: {
                images: 'Image Resources',
                design: 'Poster Design Tools',
                editor: 'WeChat Layout Tools',
                trending: 'Trending Tools'
            },
            cards: {
                // Image Resources
                'Pixabay': {
                    description: 'Global image library, supports Chinese search, free for commercial use'
                },
                'Unsplash': {
                    description: 'High-quality landscape images, suitable for backgrounds and wallpapers'
                },
                'StockSnap': {
                    description: 'Digital and lifestyle image resources'
                },
                'FoodiesFeed': {
                    description: 'Professional food photography site'
                },
                'Visualhunt': {
                    description: 'Comprehensive image library, supports color classification search'
                },
                'Burst': {
                    description: '43 categories of comprehensive image library with text descriptions'
                },
                // Poster Design Tools
                'Canva可画': {
                    name: 'Canva',
                    description: 'Online design collaboration platform, offering various design scenarios'
                },
                '稿定设计': {
                    name: 'Gaoding Design',
                    description: 'Professional online design platform with rich templates'
                },
                '创客贴': {
                    name: 'Chuangkit',
                    description: 'Many free templates, frequent updates, simple operation'
                },
                '懒人设计': {
                    name: 'Fotor',
                    description: 'Beautiful templates, simple operation, rich variety'
                },
                '图怪兽': {
                    name: 'Tuguaishou',
                    description: 'Professional poster creation with rich templates'
                },
                // WeChat Layout Tools
                '135编辑器': {
                    name: '135 Editor',
                    description: 'Feature-rich, comprehensive styles, free to use'
                },
                '秀米编辑器': {
                    name: 'Xiumi Editor',
                    description: 'Clean interface, fresh style'
                },
                'i排版': {
                    name: 'iPaiban',
                    description: 'SVG technology for layout, rich interactive effects'
                },
                '壹伴助手': {
                    name: 'Yiban Assistant',
                    description: 'Browser plugin, enhances native editor'
                },
                // Trending Tools
                '新榜': {
                    name: 'NewRank',
                    description: 'Self-media data analysis platform'
                },
                '5118大数据': {
                    name: '5118 Big Data',
                    description: 'Internet-wide popular content mining tool'
                },
                '考拉新媒体导航': {
                    name: 'Koala New Media Navigator',
                    description: 'Comprehensive new media resource navigator'
                }
            },
            noResults: 'No relevant results found',
            footer: '2025 WeChat Writing Navigator | Providing convenience for creators'
        }
    };
    
    // 切换语言函数
    function switchLanguage() {
        // 切换当前语言
        currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
        
        // 更新URL参数，不刷新页面
        const url = new URL(window.location);
        if (currentLanguage === 'en') {
            url.searchParams.set('lang', 'en');
        } else {
            url.searchParams.delete('lang');
        }
        window.history.pushState({}, '', url);
        
        // 更新按钮文本
        languageToggle.textContent = translations[currentLanguage].header.languageToggle;
        
        // 更新页面标题
        document.title = translations[currentLanguage].title;
        
        // 更新头部内容
        document.querySelector('header h1').textContent = translations[currentLanguage].header.h1;
        document.querySelector('header > p').textContent = translations[currentLanguage].header.p;
        document.querySelector('.official-link').innerHTML = 
            `<i class="fas fa-shield-alt"></i> ${translations[currentLanguage].header.officialLink}`;
        document.getElementById('searchInput').placeholder = translations[currentLanguage].header.searchPlaceholder;
        
        // 更新分类标题
        document.querySelector('#images h2').innerHTML = 
            `<i class="fas fa-images"></i> ${translations[currentLanguage].categories.images}`;
        document.querySelector('#design h2').innerHTML = 
            `<i class="fas fa-palette"></i> ${translations[currentLanguage].categories.design}`;
        document.querySelector('#editor h2').innerHTML = 
            `<i class="fas fa-edit"></i> ${translations[currentLanguage].categories.editor}`;
        document.querySelector('#trending h2').innerHTML = 
            `<i class="fas fa-fire"></i> ${translations[currentLanguage].categories.trending}`;
        
        // 更新卡片内容
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            const cardTitle = h3.textContent;
            
            if (currentLanguage === 'zh') {
                // 切换回中文时，需要找到对应的中文标题
                for (const zhKey in translations.zh.cards) {
                    // 查找英文名称对应的中文键
                    if (translations.en.cards[zhKey] && 
                        (translations.en.cards[zhKey].name === cardTitle || zhKey === cardTitle)) {
                        h3.textContent = zhKey;
                        p.textContent = translations.zh.cards[zhKey].description;
                        break;
                    }
                }
            } else if (currentLanguage === 'en') {
                // 切换到英文
                if (translations.en.cards[cardTitle]) {
                    // 如果存在name属性，则更新标题
                    if (translations.en.cards[cardTitle].name) {
                        h3.textContent = translations.en.cards[cardTitle].name;
                    }
                    // 更新描述
                    if (translations.en.cards[cardTitle].description) {
                        p.textContent = translations.en.cards[cardTitle].description;
                    }
                }
            }
        });
        
        // 更新无结果文本
        document.querySelectorAll('.no-results').forEach(el => {
            el.textContent = translations[currentLanguage].noResults;
        });
        
        // 更新页脚
        document.querySelector('footer p').textContent = translations[currentLanguage].footer;
    }
    
    // 添加切换语言事件
    languageToggle.addEventListener('click', switchLanguage);
}

// 页面加载完成后初始化搜索功能
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
    
    // 检查URL参数中的语言设置
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    // 初始化语言切换功能
    initializeLanguageToggle(langParam);
    
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
