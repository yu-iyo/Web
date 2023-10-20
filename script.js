document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

let isChinese = true; // 默认语言为中文

function toggleLanguage() {
    const sections = document.querySelectorAll('section');

    if (isChinese) {
        // 切换为英文
        document.querySelector('#language-switch button').textContent = '中文 / English';
        isChinese = false;
    } else {
        // 切换为中文
        document.querySelector('#language-switch button').textContent = 'English / 中文';
        isChinese = true;
    }

    // 更新页面内容
    updateLanguage(isChinese);
}

function updateLanguage(isChinese) {
    const languageData = {
        // 添加你的中英文内容
        "Teams介绍": {"zh": "团队介绍", "en": "Teams Overview"},
        "Project": {"zh": "项目", "en": "Project"},
    };

    sections.forEach(section => {
        const heading = section.querySelector('h2');
        const originalText = heading.textContent.trim();

        if (languageData[originalText]) {
            heading.textContent = isChinese ? languageData[originalText].zh : languageData[originalText].en;
        }
    });
}

