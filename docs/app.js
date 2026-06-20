const I18N = {
  en: {
    navFeatures:'Features', navPrivacy:'Privacy', navInstall:'Install', navFaq:'FAQ', eyebrow:'Chrome Extension · Instagram Utility',
    heroTitle:'Find out who does not follow you back on Instagram.', heroText:'Analyze your account, filter results, export data, and decide exactly which accounts to keep before unfollowing.', download:'Download latest release', github:'View on GitHub',
    certNoPassword:'NO PASSWORD', certNoPasswordSub:'Session based', certLocal:'LOCAL ONLY', certLocalSub:'No external backend', certOpenSource:'OPEN SOURCE', certOpenSourceSub:'MIT License',
    previewAccount:'Account: @demo.user', previewAnalyze:'Analyze account', previewCancel:'Cancel', previewCopy:'Copy list', previewExport:'Export', previewStatus:'Analysis complete. 12 accounts do not follow you back.', previewFollowers:'Followers', previewFollowing:'Following', previewNotFollowing:'Not following back', previewSearchPlaceholder:'Search by username or name...', previewContains:'Contains', previewAll:'All', previewShowing:'Showing 2 of 12 results', previewClear:'Clear filter', previewSelectAll:'Select all', previewSelected:'12 of 12 selected', previewSpeed:'Unfollow speed', previewBalanced:'Balanced', previewBalancedHint:'5 to 8 s per account', previewFast:'Fast', previewFastHint:'2.5 to 4.5 s per account', previewUnfollow:'Unfollow selected', previewDetected:'Detected accounts', previewSmallSelected:'12 selected', previewOpen:'Open', previewFooter:'The extension uses your active Instagram session from the browser. It does not request your password or store credentials.',
    featuresEyebrow:'Core features', featuresTitle:'Everything you need to review your followback list.', featuresText:'A focused workflow for checking followback status, reviewing results, and exporting your data.',
    f1Title:'Followback comparison', f1Text:'Compares followers against following and highlights accounts that do not follow you back.', f2Title:'Advanced filters', f2Text:'Search by username or name, then filter by verified, non-verified, private, or public accounts.', f3Title:'Selective actions', f3Text:'Select all results or exclude individual accounts before unfollowing.', f4Title:'Export tools', f4Text:'Copy the list or export results as CSV or JSON for later review.',
    privacyEyebrow:'Privacy-first', privacyTitle:'No password collection. No external backend.', privacyText:'IG MutualCheck runs inside your authenticated Instagram browser session. The extension does not request your password and does not store credentials on external servers.', p1:'Uses your active browser session.', p2:'Processes results locally.', p3:'Exports only when you request it.', p4:'No credential storage.',
    installEyebrow:'Installation', installTitle:'Install it as an unpacked Chrome extension.', installText:'Download the latest release, unzip the file, open Chrome Extensions, enable Developer Mode, and load the unpacked folder.',
    faqTitle:'Common questions', q1:'Does the extension ask for my Instagram password?', a1:'No. It uses the active Instagram session already available in your browser.', q2:'Why can Instagram rate-limit actions?', a2:'Instagram may temporarily restrict repeated automated actions. The extension includes paced execution modes, but excessive use can still be limited by Instagram.', q3:'Can I export the results?', a3:'Yes. You can copy the list or export it as CSV or JSON.', q4:'Why is it not on the Chrome Web Store?', a4:'This first release is distributed as an unpacked extension while the project is being validated and improved.', q5:'Does it send my data to a server?', a5:'No. The analysis runs in your browser. Exports are generated locally only when you request them.', q6:'Is it affiliated with Instagram?', a6:'No. It is an independent open-source project and is not affiliated with Instagram, Meta, or their products.', q7:'Is it safe to unfollow many accounts at once?', a7:'Bulk actions can trigger temporary Instagram limits. The extension includes slower execution modes, but you should use the feature carefully.',
    footerDisclaimer:'IG MutualCheck is an independent open-source project released under the MIT License. It is not affiliated with, endorsed by, sponsored by, or associated with Instagram, Meta, or any of their subsidiaries.',
    privacyPolicy:'Privacy Policy'
  },
  es: {
    navFeatures:'Funciones', navPrivacy:'Privacidad', navInstall:'Instalación', navFaq:'FAQ', eyebrow:'Extensión de Chrome · Utilidad para Instagram',
    heroTitle:'Descubre quién no te sigue de vuelta en Instagram.', heroText:'Analiza tu cuenta, filtra resultados, exporta datos y decide exactamente qué cuentas conservar antes de dejar de seguir.', download:'Descargar última versión', github:'Ver en GitHub',
    certNoPassword:'SIN CONTRASEÑA', certNoPasswordSub:'Basado en sesión', certLocal:'SOLO LOCAL', certLocalSub:'Sin backend externo', certOpenSource:'OPEN SOURCE', certOpenSourceSub:'Licencia MIT',
    previewAccount:'Cuenta: @demo.user', previewAnalyze:'Analizar cuenta', previewCancel:'Cancelar', previewCopy:'Copiar lista', previewExport:'Exportar', previewStatus:'Análisis terminado. 12 cuentas no te siguen de vuelta.', previewFollowers:'Seguidores', previewFollowing:'Seguidos', previewNotFollowing:'No te siguen', previewSearchPlaceholder:'Buscar por usuario o nombre...', previewContains:'Contiene', previewAll:'Todas', previewShowing:'Mostrando 2 de 12 resultados', previewClear:'Limpiar filtro', previewSelectAll:'Seleccionar todo', previewSelected:'12 de 12 seleccionadas', previewSpeed:'Velocidad para dejar de seguir', previewBalanced:'Equilibrada', previewBalancedHint:'5 a 8 s por cuenta', previewFast:'Rápida', previewFastHint:'2.5 a 4.5 s por cuenta', previewUnfollow:'Dejar de seguir seleccionadas', previewDetected:'Cuentas detectadas', previewSmallSelected:'12 seleccionadas', previewOpen:'Abrir', previewFooter:'La extensión usa tu sesión activa de Instagram desde el navegador. No solicita contraseña ni almacena credenciales.',
    featuresEyebrow:'Funciones principales', featuresTitle:'Todo lo necesario para revisar tu lista de followback.', featuresText:'Un flujo directo para revisar followback, filtrar resultados y exportar tus datos.',
    f1Title:'Comparación de followback', f1Text:'Compara seguidores contra seguidos y resalta las cuentas que no te siguen de vuelta.', f2Title:'Filtros avanzados', f2Text:'Busca por usuario o nombre y filtra cuentas verificadas, no verificadas, privadas o públicas.', f3Title:'Acciones selectivas', f3Text:'Selecciona todos los resultados o excluye cuentas individuales antes de dejar de seguir.', f4Title:'Herramientas de exportación', f4Text:'Copia la lista o exporta los resultados en CSV o JSON para revisarlos después.',
    privacyEyebrow:'Privacidad primero', privacyTitle:'Sin recolección de contraseñas. Sin backend externo.', privacyText:'IG MutualCheck funciona dentro de tu sesión autenticada de Instagram en el navegador. La extensión no solicita tu contraseña ni almacena credenciales en servidores externos.', p1:'Usa tu sesión activa del navegador.', p2:'Procesa los resultados localmente.', p3:'Exporta solo cuando tú lo solicitas.', p4:'No almacena credenciales.',
    installEyebrow:'Instalación', installTitle:'Instálala como extensión de Chrome sin empaquetar.', installText:'Descarga la última versión, descomprime el archivo, abre Extensiones de Chrome, activa el modo desarrollador y carga la carpeta descomprimida.',
    faqTitle:'Preguntas frecuentes', q1:'¿La extensión pide mi contraseña de Instagram?', a1:'No. Usa la sesión activa de Instagram que ya está disponible en tu navegador.', q2:'¿Por qué Instagram puede limitar acciones?', a2:'Instagram puede restringir temporalmente acciones automatizadas repetidas. La extensión incluye modos con pausas, pero el uso excesivo puede ser limitado por Instagram.', q3:'¿Puedo exportar los resultados?', a3:'Sí. Puedes copiar la lista o exportarla como CSV o JSON.', q4:'¿Por qué no está en la Chrome Web Store?', a4:'Esta primera versión se distribuye como extensión sin empaquetar mientras el proyecto se valida y mejora.', q5:'¿La extensión envía mis datos a un servidor?', a5:'No. El análisis se ejecuta en tu navegador. Las exportaciones se generan localmente solo cuando tú las solicitas.', q6:'¿Está afiliada con Instagram?', a6:'No. Es un proyecto open source independiente y no está afiliado con Instagram, Meta ni sus productos.', q7:'¿Es seguro dejar de seguir muchas cuentas de una vez?', a7:'Las acciones masivas pueden activar límites temporales de Instagram. La extensión incluye modos más pausados, pero debes usar esta función con cuidado.',
    footerDisclaimer:'IG MutualCheck es un proyecto open source independiente publicado bajo licencia MIT. No está afiliado, respaldado, patrocinado ni asociado con Instagram, Meta o cualquiera de sus subsidiarias.',
    privacyPolicy:'Política de privacidad'
  }
};

const selector = document.getElementById('language-selector');
const langFlag = document.getElementById('lang-flag');
const langCode = document.getElementById('lang-code');
let lang = localStorage.getItem('ifcLandingLang') || (navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en');

function getFlagUrl(nextLang) {
  return `assets/flags/4x3/${nextLang === 'es' ? 'es' : 'us'}.svg`;
}

function applyLang(nextLang) {
  lang = I18N[nextLang] ? nextLang : 'en';
  localStorage.setItem('ifcLandingLang', lang);
  document.documentElement.lang = lang;
  if (langFlag) langFlag.src = getFlagUrl(lang);
  if (langCode) langCode.textContent = lang.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (I18N[lang][key]) el.placeholder = I18N[lang][key];
  });
}
selector.addEventListener('click', () => applyLang(lang === 'en' ? 'es' : 'en'));
applyLang(lang);


document.querySelectorAll('.faq-grid details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-grid details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
