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

// 在 script.js 中

let isChinese = true; // 默认语言为中文
let sections; // 将 sections 声明在全局范围

document.addEventListener('DOMContentLoaded', function () {
    // 获取所有 section 元素
    sections = document.querySelectorAll('section');

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

function toggleLanguage() {
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
        "團隊介紹": {"zh": "團隊介紹", "en": "Teams Overview"},
        "項目"：{"zh": "項目", "en": "Teams Overview"}
    };

    sections.forEach(section => {
        const heading = section.querySelector('h2');
        const originalText = heading.textContent.trim();

        if (languageData[originalText]) {
            heading.textContent = isChinese ? languageData[originalText].zh : languageData[originalText].en;
        }
    });
}
