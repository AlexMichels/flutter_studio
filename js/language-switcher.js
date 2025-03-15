// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
  // Default language is German
  let currentLanguage = localStorage.getItem('language') || getBrowserLanguage() || 'de';
  
  // Initialize language on page load
  setLanguage(currentLanguage);
  
  // Add language switcher to the navbar
  addLanguageSwitcher();
  
  /**
   * Detects the browser language
   * @returns {string} Language code (en or de)
   */
  function getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    // Only return en if browser language starts with en, otherwise default to de
    return browserLang.startsWith('en') ? 'en' : 'de';
  }
  
  /**
   * Adds the language switcher to the navbar
   */
  function addLanguageSwitcher() {
    // Find the container where we want to add the language switcher
    // (to the right of the CTA button)
    const ctaButton = document.querySelector('.navbar .btn-primary');
    if (!ctaButton || !ctaButton.parentNode) return;
    
    // Create language switcher container
    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'language-switcher ms-3 d-flex align-items-center';
    
    // Create flag span element (no button styling)
    const flagElement = document.createElement('span');
    flagElement.className = 'language-flag';
    // If current language is German, show English (US/UK) flag to switch to English
    // If current language is English, show German flag to switch to German
    flagElement.innerHTML = currentLanguage === 'de' ? '🇬🇧' : '🇩🇪';
    flagElement.style.cursor = 'pointer'; // Make it clear it's clickable
    flagElement.addEventListener('click', () => {
      // Toggle between languages
      const newLang = currentLanguage === 'de' ? 'en' : 'de';
      setLanguage(newLang);
    });
    
    // Add flag to container
    switcherContainer.appendChild(flagElement);
    
    // Add container after the CTA button (as the rightmost element)
    ctaButton.parentNode.insertBefore(switcherContainer, ctaButton.nextSibling);
  }
  
  /**
   * Sets the current language and updates the UI
   * @param {string} lang - The language code ('en' or 'de')
   */
  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'de') {
      lang = 'de'; // Default to German if invalid language
    }
    
    currentLanguage = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    
    // Update the flag to show the opposite language
    const flagElement = document.querySelector('.language-flag');
    if (flagElement) {
      flagElement.innerHTML = lang === 'de' ? '🇬🇧' : '🇩🇪';
    }
    
    // Update all translatable elements
    updateTranslations();
    
    // Update meta tags
    updateMetaTags();
    
    // Update footer links
    updateFooterLinks();
  }
  
  /**
   * Updates footer links based on language
   */
  function updateFooterLinks() {
    const imprintLink = document.querySelector('a[data-i18n="footer_imprint"]');
    const privacyLink = document.querySelector('a[data-i18n="footer_privacy"]');
    
    if (imprintLink) {
      imprintLink.href = currentLanguage === 'en' ? 'imprint.html' : 'impressum.html';
    }
    
    if (privacyLink) {
      privacyLink.href = currentLanguage === 'en' ? 'privacy.html' : 'datenschutz.html';
    }
  }
  
  /**
   * Updates all translatable elements on the page
   */
  function updateTranslations() {
    // Update HTML content for elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
        element.innerHTML = translations[currentLanguage][key];
      }
    });
    
    // Update placeholders for form elements
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
        element.placeholder = translations[currentLanguage][key];
      }
    });
  }
  
  /**
   * Updates meta tags for SEO
   */
  function updateMetaTags() {
    // Update title
    document.title = translations[currentLanguage].meta_title;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', translations[currentLanguage].meta_description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', translations[currentLanguage].meta_keywords);
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', translations[currentLanguage].og_title);
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', translations[currentLanguage].og_description);
    }
  }
  
  // Expose language setter for use in other scripts
  window.setLanguage = setLanguage;
});