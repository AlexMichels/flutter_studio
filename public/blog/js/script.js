// Function to handle syntax highlighting when the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Add syntax highlighting class to code blocks
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(function (block) {
        // Add a class for styling
        block.parentElement.classList.add('code-block');

        // Simple syntax highlighting
        if (block.className.includes('language-dart')) {
            highlightDartSyntax(block);
        } else if (block.className.includes('language-yaml')) {
            highlightYamlSyntax(block);
        }
    });
});

// Simple Dart syntax highlighter
function highlightDartSyntax(codeBlock) {
    let html = codeBlock.innerHTML;

    // Keywords
    const keywords = [
        'import', 'class', 'void', 'static', 'const', 'final', 'Future', 'async', 'await',
        'try', 'catch', 'if', 'else', 'return', 'String', 'bool', 'true', 'false', 'null'
    ];

    // Highlight keywords
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        html = html.replace(regex, `<span class="keyword">${keyword}</span>`);
    });

    // Highlight strings
    html = html.replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>');
    html = html.replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');

    // Highlight comments
    html = html.replace(/\/\/(.*)/g, '<span class="comment">// $1</span>');

    codeBlock.innerHTML = html;

    // Add styles for the highlighted elements
    const style = document.createElement('style');
    style.textContent = `
        .keyword { color: #0033b3; font-weight: bold; }
        .string { color: #067d17; }
        .comment { color: #8c8c8c; font-style: italic; }
    `;
    document.head.appendChild(style);
}

// Simple YAML syntax highlighter
function highlightYamlSyntax(codeBlock) {
    let html = codeBlock.innerHTML;

    // Highlight keys
    html = html.replace(/^(\s*)([^:]+):/gm, '$1<span class="yaml-key">$2</span>:');

    // Highlight values
    html = html.replace(/:\s*([^#\n]+)/g, ': <span class="yaml-value">$1</span>');

    codeBlock.innerHTML = html;

    // Add styles for the highlighted elements
    const style = document.createElement('style');
    style.textContent = `
        .yaml-key { color: #0033b3; }
        .yaml-value { color: #067d17; }
    `;
    document.head.appendChild(style);
}

// Add smooth scrolling for anchor links
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.hash && e.target.origin + e.target.pathname === window.location.origin + window.location.pathname) {
        e.preventDefault();
        const targetElement = document.querySelector(e.target.hash);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
}); 