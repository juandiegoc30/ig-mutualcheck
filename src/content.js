(() => {
  if (window.__IFC_EXTENSION_LOADED__) return;
  window.__IFC_EXTENSION_LOADED__ = true;

  const IG_APP_ID = '936619743392459';
  const API_BASE = 'https://www.instagram.com/api/v1';

  const I18N = {
    es: {
      accountNotDetected: 'Cuenta: no detectada',
      account: 'Cuenta',
      close: 'Cerrar',
      analyze: 'Analizar cuenta',
      cancel: 'Cancelar',
      copy: 'Copiar lista',
      export: 'Exportar',
      exportCsv: 'Exportar CSV',
      exportJson: 'Exportar JSON',
      exportOptions: 'Opciones de exportación',
      initialStatus: 'Abre Instagram con tu sesión iniciada y presiona “Analizar cuenta”.',
      followers: 'Seguidores',
      following: 'Seguidos',
      notFollowing: 'No te siguen',
      searchPlaceholder: 'Buscar por usuario o nombre...',
      searchModeTitle: 'Tipo de búsqueda',
      contains: 'Contiene',
      starts: 'Empieza por',
      exact: 'Coincide exacto',
      accountTypeTitle: 'Tipo de cuenta',
      all: 'Todas',
      verified: 'Verificadas',
      notVerified: 'No verificadas',
      private: 'Privadas',
      public: 'Públicas',
      showingResults: 'Mostrando {shown} de {total} resultados',
      showingZero: 'Mostrando 0 resultados',
      clearFilter: 'Limpiar filtro',
      selectAll: 'Seleccionar todo',
      selectedOfTotal: '{selected} de {total} seleccionadas',
      selected: '{selected} seleccionadas',
      unfollowSpeed: 'Velocidad para dejar de seguir',
      balanced: 'Equilibrada',
      fast: 'Rápida',
      balancedHint: '5 a 8 s por cuenta',
      fastHint: '2.5 a 4.5 s por cuenta',
      unfollowSelected: 'Dejar de seguir seleccionadas',
      detectedAccounts: 'Cuentas detectadas',
      noResultsYet: 'Todavía no hay resultados.',
      noFilterResults: 'No hay resultados con ese filtro.',
      includeUnfollow: 'Incluir al dejar de seguir',
      privateAccount: 'Cuenta privada',
      open: 'Abrir',
      footer: 'La extensión usa tu sesión activa de Instagram desde el navegador. No solicita contraseña ni almacena credenciales.',
      copyright: '© 2026 Juan Diego Castellanos · github.com/juandiegoc30',
      usernameDetectionError: 'No se pudo detectar el username autenticado desde web_form_data.',
      userIdError: 'No se pudo obtener el ID de usuario para @{username}.',
      canceledByUser: 'Proceso cancelado por el usuario.',
      copied: 'Lista copiada al portapapeles.',
      noSelected: 'No hay cuentas seleccionadas para dejar de seguir.',
      confirmUnfollow: 'Vas a dejar de seguir {total} cuenta(s) seleccionada(s).\n\nVelocidad seleccionada: {speed}.\n\nLas cuentas desmarcadas se conservarán. Instagram puede limitar temporalmente tu cuenta si haces muchas acciones seguidas. El proceso usará pausas automáticas y podrás cancelarlo.\n\n¿Deseas continuar?',
      speedFast: 'rápida',
      speedBalanced: 'equilibrada',
      unfollowCanceled: 'Proceso de dejar de seguir cancelado.',
      unfollowingUser: 'Dejando de seguir @{username} ({current}/{total})...',
      pauseBeforeNext: 'Pausa de {seconds}s antes de la siguiente cuenta... ({current}/{total})',
      unfollowDone: 'Proceso terminado. Dejaste de seguir {success} cuenta(s). Fallidas: {failed}.',
      unfollowFailed: 'Algunas cuentas no se pudieron dejar de seguir. Revisa window.instagramFollowbackUnfollowResult en la consola.',
      detecting: 'Detectando cuenta autenticada...',
      readingFollowers: 'Leyendo seguidores de @{username}...',
      readingFollowersProgress: 'Leyendo seguidores... {count} encontrados.',
      readingFollowing: 'Leyendo cuentas seguidas por @{username}...',
      readingFollowingProgress: 'Leyendo seguidos... {count} encontrados.',
      analysisDone: 'Análisis terminado. {count} cuentas no te siguen de vuelta.',
      analysisError: 'No se pudo completar el análisis. Verifica que tengas sesión iniciada en Instagram o intenta más tarde.',
      canceling: 'Cancelando proceso...',
      language: 'Idioma'
    },
    en: {
      accountNotDetected: 'Account: not detected',
      account: 'Account',
      close: 'Close',
      analyze: 'Analyze account',
      cancel: 'Cancel',
      copy: 'Copy list',
      export: 'Export',
      exportCsv: 'Export CSV',
      exportJson: 'Export JSON',
      exportOptions: 'Export options',
      initialStatus: 'Open Instagram while logged in and press “Analyze account”.',
      followers: 'Followers',
      following: 'Following',
      notFollowing: 'Not following back',
      searchPlaceholder: 'Search by username or name...',
      searchModeTitle: 'Search mode',
      contains: 'Contains',
      starts: 'Starts with',
      exact: 'Exact match',
      accountTypeTitle: 'Account type',
      all: 'All',
      verified: 'Verified',
      notVerified: 'Not verified',
      private: 'Private',
      public: 'Public',
      showingResults: 'Showing {shown} of {total} results',
      showingZero: 'Showing 0 results',
      clearFilter: 'Clear filter',
      selectAll: 'Select all',
      selectedOfTotal: '{selected} of {total} selected',
      selected: '{selected} selected',
      unfollowSpeed: 'Unfollow speed',
      balanced: 'Balanced',
      fast: 'Fast',
      balancedHint: '5 to 8 s per account',
      fastHint: '2.5 to 4.5 s per account',
      unfollowSelected: 'Unfollow selected',
      detectedAccounts: 'Detected accounts',
      noResultsYet: 'No results yet.',
      noFilterResults: 'No results match this filter.',
      includeUnfollow: 'Include when unfollowing',
      privateAccount: 'Private account',
      open: 'Open',
      footer: 'The extension uses your active Instagram session from the browser. It does not request your password or store credentials.',
      copyright: '© 2026 Juan Diego Castellanos · github.com/juandiegoc30',
      usernameDetectionError: 'Could not detect the authenticated username from web_form_data.',
      userIdError: 'Could not get user ID for @{username}.',
      canceledByUser: 'Process canceled by the user.',
      copied: 'List copied to clipboard.',
      noSelected: 'No accounts selected to unfollow.',
      confirmUnfollow: 'You are about to unfollow {total} selected account(s).\n\nSelected speed: {speed}.\n\nUnchecked accounts will be kept. Instagram may temporarily limit your account if too many actions are performed in a row. The process will use automatic pauses and can be canceled.\n\nDo you want to continue?',
      speedFast: 'fast',
      speedBalanced: 'balanced',
      unfollowCanceled: 'Unfollow process canceled.',
      unfollowingUser: 'Unfollowing @{username} ({current}/{total})...',
      pauseBeforeNext: 'Waiting {seconds}s before the next account... ({current}/{total})',
      unfollowDone: 'Process finished. Unfollowed {success} account(s). Failed: {failed}.',
      unfollowFailed: 'Some accounts could not be unfollowed. Check window.instagramFollowbackUnfollowResult in the console.',
      detecting: 'Detecting authenticated account...',
      readingFollowers: 'Reading followers for @{username}...',
      readingFollowersProgress: 'Reading followers... {count} found.',
      readingFollowing: 'Reading accounts followed by @{username}...',
      readingFollowingProgress: 'Reading following... {count} found.',
      analysisDone: 'Analysis complete. {count} accounts do not follow you back.',
      analysisError: 'Could not complete the analysis. Check that you are logged in to Instagram or try again later.',
      canceling: 'Canceling process...',
      language: 'Language'
    }
  };

  let currentLang = navigator.language && navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';

  function getLangFlagUrl(lang) {
    const code = lang === 'es' ? 'es' : 'us';
    return chrome.runtime.getURL(`assets/flags/4x3/${code}.svg`);
  }

  function tr(key, params = {}) {
    const source = I18N[currentLang] || I18N.es;
    let text = source[key] || I18N.es[key] || key;
    for (const [name, value] of Object.entries(params)) {
      text = text.replaceAll(`{${name}}`, String(value));
    }
    return text;
  }

  async function loadLanguagePreference() {
    try {
      const stored = await chrome.storage?.local?.get?.('ifcLanguage');
      if (stored?.ifcLanguage && I18N[stored.ifcLanguage]) {
        currentLang = stored.ifcLanguage;
      }
    } catch (_) {}
  }

  async function saveLanguagePreference(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    try { await chrome.storage?.local?.set?.({ ifcLanguage: lang }); } catch (_) {}
  }

  function renderCopyright() {
    const node = $('ifc-copyright-text');
    if (!node) return;
    node.innerHTML = '© 2026 Juan Diego Castellanos · <a href="https://github.com/juandiegoc30" target="_blank" rel="noopener noreferrer">github.com/juandiegoc30</a>';
  }

  function applyTranslations() {
    const root = document.getElementById('ifc-root');
    if (!root) return;

    const setText = (id, key) => { const el = $(id); if (el) el.textContent = tr(key); };
    setText('ifc-start', 'analyze');
    const startBtn = $('ifc-start');
    if (startBtn) startBtn.title = tr('analyze');
    setText('ifc-cancel', 'cancel');
    const cancelBtn = $('ifc-cancel');
    if (cancelBtn) cancelBtn.title = tr('cancel');
    setText('ifc-copy', 'copy');
    const copyBtn = $('ifc-copy');
    if (copyBtn) copyBtn.title = tr('copy');
    setText('ifc-export', 'export');
    const exportBtn = $('ifc-export');
    if (exportBtn) exportBtn.title = tr('exportOptions');
    setText('ifc-export-csv', 'exportCsv');
    setText('ifc-export-json', 'exportJson');
    setText('ifc-clear-filter', 'clearFilter');
    const clearFilterBtn = $('ifc-clear-filter');
    if (clearFilterBtn) clearFilterBtn.title = tr('clearFilter');
    setText('ifc-unfollow', 'unfollowSelected');
    const unfollowBtn = $('ifc-unfollow');
    if (unfollowBtn) unfollowBtn.title = tr('unfollowSelected');
    setText('ifc-list-title', 'detectedAccounts');
    setText('ifc-footer-text', 'footer');
    renderCopyright();
    setText('ifc-speed-label', 'unfollowSpeed');
    setText('ifc-select-all-text', 'selectAll');
    setText('ifc-metric-followers', 'followers');
    setText('ifc-metric-following', 'following');
    setText('ifc-metric-notback', 'notFollowing');

    const close = $('ifc-close');
    if (close) close.title = tr('close');

    const filter = $('ifc-filter');
    if (filter) filter.placeholder = tr('searchPlaceholder');

    const mode = $('ifc-filter-mode');
    if (mode) {
      mode.title = tr('searchModeTitle');
      mode.querySelector('option[value="contains"]').textContent = tr('contains');
      mode.querySelector('option[value="starts"]').textContent = tr('starts');
      mode.querySelector('option[value="exact"]').textContent = tr('exact');
      mode.title = `${tr('searchModeTitle')}: ${mode.options[mode.selectedIndex]?.textContent || ''}`;
    }

    const type = $('ifc-account-type');
    if (type) {
      type.title = tr('accountTypeTitle');
      type.querySelector('option[value="all"]').textContent = tr('all');
      type.querySelector('option[value="verified"]').textContent = tr('verified');
      type.querySelector('option[value="not_verified"]').textContent = tr('notVerified');
      type.querySelector('option[value="private"]').textContent = tr('private');
      type.querySelector('option[value="public"]').textContent = tr('public');
      type.title = `${tr('accountTypeTitle')}: ${type.options[type.selectedIndex]?.textContent || ''}`;
    }

    const speedBalanced = $('ifc-speed-balanced');
    const speedFast = $('ifc-speed-fast');
    const speedBalancedHint = $('ifc-speed-balanced-hint');
    const speedFastHint = $('ifc-speed-fast-hint');
    if (speedBalanced) speedBalanced.textContent = tr('balanced');
    if (speedFast) speedFast.textContent = tr('fast');
    if (speedBalancedHint) speedBalancedHint.textContent = tr('balancedHint');
    if (speedFastHint) speedFastHint.textContent = tr('fastHint');

    const langButton = $('ifc-language');
    const langFlag = $('ifc-language-flag');
    const langCode = $('ifc-language-code');
    if (langButton) {
      langButton.title = tr('language');
      langButton.setAttribute('aria-label', tr('language'));
    }
    if (langFlag) langFlag.src = getLangFlagUrl(currentLang);
    if (langCode) langCode.textContent = currentLang.toUpperCase();

    if (!state.currentUser?.username) {
      const account = $('ifc-account');
      if (account) {
        account.textContent = tr('accountNotDetected');
        account.title = tr('accountNotDetected');
      }
    }

    if (!state.isRunning && !state.unfollowRunning && !state.notFollowingBack.length) {
      setStatus(tr('initialStatus'));
    }

    updateSelectionUi();
    renderList();
  }


  const state = {
    isRunning: false,
    shouldCancel: false,
    currentUser: null,
    followers: [],
    following: [],
    notFollowingBack: [],
    unfollowRunning: false,
    unfollowCancel: false,
    selectedToUnfollow: new Set()
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function normalizeUsername(username) {
    return String(username || '').trim().replace(/^@/, '').toLowerCase();
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return '';
  }

  async function igFetch(url, options = {}) {
    const method = options.method || 'GET';
    const response = await fetch(url, {
      method,
      credentials: 'include',
      headers: {
        'x-ig-app-id': IG_APP_ID,
        'x-requested-with': 'XMLHttpRequest',
        'accept': 'application/json',
        ...(method !== 'GET' ? { 'x-csrftoken': getCookie('csrftoken') } : {}),
        ...(options.headers || {})
      },
      body: options.body
    });

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      throw new Error(`Instagram respondió ${response.status}. ${body.slice(0, 300)}`);
    }

    return response.json();
  }

  async function getCurrentUserFromEditData() {
    const data = await igFetch(`${API_BASE}/accounts/edit/web_form_data/`);
    const formData = data?.form_data || {};
    const username = normalizeUsername(formData.username);
    const userId = formData.user_id || formData.username_id || formData.pk || formData.id;

    if (!username) {
      throw new Error(tr('usernameDetectionError'));
    }

    return { username, userId: userId ? String(userId) : null };
  }

  async function getUserIdByUsername(username) {
    const cleanUsername = normalizeUsername(username);
    const data = await igFetch(`${API_BASE}/users/web_profile_info/?username=${encodeURIComponent(cleanUsername)}`);
    const userId = data?.data?.user?.id;

    if (!userId) {
      throw new Error(tr('userIdError', { username: cleanUsername }));
    }

    return String(userId);
  }

  async function getCurrentUser() {
    const user = await getCurrentUserFromEditData();

    if (user.userId) {
      return user;
    }

    const userId = await getUserIdByUsername(user.username);
    return { ...user, userId };
  }

  async function getRelationshipList(userId, type, onProgress) {
    const users = [];
    const seen = new Set();
    let maxId = '';
    let page = 1;

    while (true) {
      if (state.shouldCancel) {
        throw new Error(tr('canceledByUser'));
      }

      const url = `${API_BASE}/friendships/${userId}/${type}/?count=50${maxId ? `&max_id=${encodeURIComponent(maxId)}` : ''}`;
      const data = await igFetch(url);
      const pageUsers = Array.isArray(data.users) ? data.users : [];

      for (const user of pageUsers) {
        const username = normalizeUsername(user.username);
        if (!username || seen.has(username)) continue;

        seen.add(username);
        users.push({
          username,
          userId: String(user.pk || user.id || user.pk_id || ''),
          fullName: user.full_name || '',
          isPrivate: Boolean(user.is_private),
          isVerified: Boolean(user.is_verified),
          profilePicUrl: user.profile_pic_url || '',
          profileUrl: `https://www.instagram.com/${username}/`
        });
      }

      onProgress?.({ type, count: users.length, page });

      if (!data.next_max_id) break;
      maxId = data.next_max_id;
      page += 1;

      await sleep(1100);
    }

    return users;
  }

  function compareLists(followers, following) {
    const followersSet = new Set(followers.map((user) => normalizeUsername(user.username)));
    return following.filter((user) => !followersSet.has(normalizeUsername(user.username)));
  }

  async function unfollowUser(user) {
    if (!user.userId) {
      user.userId = await getUserIdByUsername(user.username);
    }

    return igFetch(`${API_BASE}/friendships/destroy/${encodeURIComponent(user.userId)}/`, {
      method: 'POST'
    });
  }

  function createStyles() {
    if (document.getElementById('ifc-styles')) return;

    const style = document.createElement('style');
    style.id = 'ifc-styles';
    style.textContent = `
      #ifc-root {
        position: fixed;
        right: 24px;
        bottom: 24px;
        width: 420px;
        max-width: calc(100vw - 32px);
        height: min(760px, calc(100vh - 48px));
        max-height: calc(100vh - 48px);
        background: #ffffff;
        color: #111827;
        border: 1px solid #e5e7eb;
        box-shadow: 0 24px 70px rgba(0, 0, 0, .24);
        border-radius: 18px;
        z-index: 2147483647;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      #ifc-root * { box-sizing: border-box; }
      #ifc-root { overflow-x: hidden; }

      .ifc-header {
        padding: 16px 18px;
        border-bottom: 1px solid #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex: 0 0 auto;
      }

      .ifc-header-main {
        min-width: 0;
        flex: 1 1 auto;
      }

      .ifc-title {
        font-size: 15px;
        font-weight: 800;
        margin: 0;
      }

      .ifc-subtitle {
        display: inline-flex;
        align-items: center;
        max-width: 100%;
        margin-top: 7px;
        padding: 6px 10px;
        border: 1px solid #dbeafe;
        border-radius: 999px;
        background: linear-gradient(90deg, #eff6ff, #ffffff);
        color: #1f2937;
        font-size: 13px;
        font-weight: 750;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .ifc-header-right {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .ifc-language {
        border: 1px solid #e5e7eb;
        background: #ffffff !important;
        color: #111827 !important;
        border-radius: 999px;
        padding: 6px 12px;
        font-size: 13px;
        font-weight: 800;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        height: 32px;
        white-space: nowrap;
        cursor: pointer;
        outline: none;
      }

      .ifc-language-flag {
        display: block;
        width: 18px;
        height: 13px;
        line-height: 1;
        border-radius: 2px;
        border: 1px solid #e5e7eb;
        object-fit: cover;
      }

      .ifc-close {
        border: 0;
        background: #f3f4f6;
        color: #111827;
        width: 30px;
        height: 30px;
        border-radius: 999px;
        cursor: pointer;
        font-size: 20px;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 0 2px 0;
      }

      .ifc-body {
        padding: 16px 18px;
        overflow-y: auto;
        overflow-x: hidden;
        flex: 1 1 auto;
        min-height: 0;
      }

      .ifc-actions {
        display: grid;
        grid-template-columns: minmax(0, 1.08fr) minmax(0, .78fr) minmax(0, .92fr) minmax(0, .78fr);
        gap: 8px;
        align-items: center;
        margin-bottom: 10px;
        overflow: visible;
        width: 100%;
      }

      .ifc-actions .ifc-btn {
        white-space: nowrap;
        min-width: 0;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .ifc-export-wrap {
        position: relative;
        min-width: 0;
        width: 100%;
      }

      .ifc-export-menu {
        position: absolute;
        right: 0;
        top: calc(100% + 6px);
        min-width: 150px;
        padding: 6px;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        background: #ffffff;
        box-shadow: 0 16px 32px rgba(0, 0, 0, .14);
        z-index: 2147483647;
      }

      .ifc-export-option {
        display: block;
        width: 100%;
        border: 0;
        background: transparent;
        color: #111827;
        text-align: left;
        padding: 9px 10px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 650;
        cursor: pointer;
      }

      .ifc-export-option:hover {
        background: #f3f4f6;
      }

      .ifc-unfollow-options {
        display: grid;
        gap: 8px;
        margin-bottom: 10px;
      }

      .ifc-speed-toggle {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        padding: 4px;
        border: 1px solid #e5e7eb;
        background: #f9fafb;
        border-radius: 12px;
      }

      .ifc-speed-option {
        position: relative;
      }

      .ifc-speed-option input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }

      .ifc-speed-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        border-radius: 9px;
        color: #374151;
        cursor: pointer;
        user-select: none;
        padding: 7px 6px;
        text-align: center;
      }

      .ifc-speed-name {
        font-size: 12px;
        font-weight: 800;
        line-height: 1.15;
      }

      .ifc-speed-hint {
        margin-top: 3px;
        font-size: 10px;
        font-weight: 600;
        color: #6b7280;
        line-height: 1.15;
      }

      .ifc-speed-option input:checked + .ifc-speed-card {
        background: #111827;
        color: #ffffff;
      }

      .ifc-speed-option input:checked + .ifc-speed-card .ifc-speed-hint {
        color: #d1d5db;
      }

      .ifc-selection-panel {
        display: grid;
        gap: 10px;
        margin: 10px 0 12px;
        padding: 12px;
        border: 1px solid #f3f4f6;
        border-radius: 12px;
        background: #fafafa;
      }

      .ifc-selection-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
      }

      .ifc-check-label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: #111827;
        font-weight: 650;
      }

      .ifc-checkbox {
        width: 16px;
        height: 16px;
        accent-color: #111827;
      }

      .ifc-selected-count {
        color: #6b7280;
        font-size: 12px;
      }

      .ifc-label {
        font-size: 12px;
        color: #374151;
        font-weight: 650;
      }

      .ifc-btn {
        border: 0;
        border-radius: 10px;
        padding: 9px 9px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 650;
      }

      .ifc-btn-primary {
        background: #111827;
        color: #ffffff;
      }

      .ifc-btn-secondary {
        background: #f3f4f6;
        color: #111827;
      }

      .ifc-btn-danger {
        background: #fee2e2;
        color: #991b1b;
      }

      .ifc-btn:disabled {
        opacity: .55;
        cursor: not-allowed;
      }

      .ifc-status {
        min-height: 20px;
        color: #1f2937;
        font-size: 13px;
        line-height: 1.45;
        margin-bottom: 12px;
        padding: 11px 12px;
        border: 1px solid #bfdbfe;
        background: linear-gradient(90deg, #eff6ff, #ffffff, #eff6ff);
        background-size: 220% 100%;
        border-radius: 12px;
        font-weight: 600;
        animation: ifcStatusFlow 2.6s ease-in-out infinite;
      }

      @keyframes ifcStatusFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .ifc-error {
        color: #991b1b;
        background: #fef2f2;
        border: 1px solid #fecaca;
        padding: 10px 10px;
        border-radius: 10px;
        margin-bottom: 12px;
        font-size: 13px;
        line-height: 1.45;
      }

      .ifc-metrics {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-bottom: 12px;
      }

      .ifc-metric {
        border: 1px solid #f3f4f6;
        background: #fafafa;
        border-radius: 12px;
        padding: 10px;
      }

      .ifc-metric-value {
        font-size: 18px;
        font-weight: 800;
      }

      .ifc-metric-label {
        font-size: 11px;
        color: #6b7280;
        margin-top: 3px;
      }

      .ifc-filter-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 112px 112px;
        gap: 8px;
        margin-bottom: 10px;
      }

      .ifc-search, .ifc-select {
        width: 100%;
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        padding: 10px 10px;
        outline: none;
        font-size: 13px;
        background: #ffffff !important;
        color: #111827 !important;
        -webkit-text-fill-color: #111827 !important;
        caret-color: #111827 !important;
      }

      #ifc-filter-mode, #ifc-account-type {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-left: 9px;
        padding-right: 18px;
      }

      .ifc-search::placeholder {
        color: #9ca3af !important;
        -webkit-text-fill-color: #9ca3af !important;
        opacity: 1;
      }

      .ifc-select option {
        color: #111827;
        background: #ffffff;
      }

      .ifc-filter-tools {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 12px;
        color: #6b7280;
      }

      .ifc-link-btn {
        border: 0;
        background: transparent;
        color: #2563eb;
        cursor: pointer;
        font-size: 12px;
        font-weight: 700;
        padding: 0;
      }

      .ifc-list-box {
        margin-top: 10px;
        border: 1px solid #e5e7eb;
        border-radius: 14px;
        background: #ffffff;
        overflow: hidden;
      }

      .ifc-list-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 12px;
        border-bottom: 1px solid #f3f4f6;
        background: #fafafa;
        color: #374151;
        font-size: 12px;
        font-weight: 700;
      }

      .ifc-list {
        height: 300px;
        max-height: 42vh;
        overflow-y: auto;
        overflow-x: hidden;
        border: 0;
        border-radius: 0;
      }

      .ifc-empty {
        padding: 22px 14px;
        color: #6b7280;
        font-size: 13px;
        text-align: center;
      }

      .ifc-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 12px;
        border-bottom: 1px solid #f3f4f6;
      }

      .ifc-row:last-child { border-bottom: 0; }

      .ifc-user {
        min-width: 0;
        flex: 1 1 auto;
      }

      .ifc-user-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        flex: 1 1 auto;
      }

      .ifc-avatar,
      .ifc-avatar-fallback {
        width: 34px;
        height: 34px;
        border-radius: 999px;
        flex: 0 0 auto;
      }

      .ifc-avatar {
        display: block;
        object-fit: cover;
        background: #f3f4f6;
        border: 1px solid #e5e7eb;
      }

      .ifc-avatar-fallback {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #dbeafe;
        background: linear-gradient(135deg, #e0f2fe, #eff6ff);
        color: #1e3a8a;
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
      }

      .ifc-username {
        color: #111827;
        font-size: 13px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        align-items: center;
        gap: 5px;
        min-width: 0;
      }

      .ifc-verified-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 17px;
        height: 17px;
        flex: 0 0 auto;
        margin-left: 2px;
        transform: translateY(1px);
      }

      .ifc-verified-badge svg {
        width: 17px;
        height: 17px;
        display: block;
        filter: drop-shadow(0 1px 2px rgba(0, 149, 246, .28));
      }

      .ifc-verified-star {
        fill: #0095f6;
      }

      .ifc-verified-check {
        fill: #ffffff;
      }

      .ifc-fullname {
        color: #6b7280;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 2px;
      }

      .ifc-open {
        appearance: none;
        border: 0;
        background: transparent;
        color: #2563eb;
        text-decoration: none;
        font-size: 12px;
        font-weight: 700;
        line-height: 1;
        padding: 0;
        cursor: pointer;
        flex: 0 0 auto;
      }

      .ifc-open:hover,
      .ifc-open:active,
      .ifc-open:focus,
      .ifc-open:focus-visible {
        color: #2563eb;
        text-decoration: none;
      }

      .ifc-open:hover {
        color: #1d4ed8;
      }

      @media (max-width: 560px) {
        .ifc-filter-grid {
          grid-template-columns: minmax(0, 1fr) 104px 104px;
        }
        .ifc-actions {
          grid-template-columns: minmax(0, 1.05fr) minmax(0, .72fr) minmax(0, .88fr) minmax(0, .72fr);
          gap: 6px;
        }
        .ifc-btn { font-size: 11px; padding-left: 6px; padding-right: 6px; }
      }

      .ifc-footer {
        padding: 12px 18px;
        border-top: 1px solid #f3f4f6;
        color: #6b7280;
        font-size: 11px;
        line-height: 1.45;
        flex: 0 0 auto;
        background: #ffffff;
        text-align: justify;
      }

      .ifc-copyright {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px dashed #e5e7eb;
        text-align: center;
        color: #4b5563;
        font-size: 10.5px;
        font-weight: 600;
        letter-spacing: .01em;
      }

      .ifc-copyright a {
        color: #2563eb;
        text-decoration: none;
        font-weight: 800;
      }

      .ifc-copyright a:hover {
        text-decoration: underline;
      }
    `;

    document.head.appendChild(style);
  }

  function createPanel() {
    createStyles();

    const existing = document.getElementById('ifc-root');
    if (existing) return existing;

    const root = document.createElement('div');
    root.id = 'ifc-root';
    root.innerHTML = `
      <div class="ifc-header">
        <div class="ifc-header-main">
          <p class="ifc-title">Instagram Followback Checker</p>
          <div class="ifc-subtitle" id="ifc-account" title="Cuenta: no detectada">Cuenta: no detectada</div>
        </div>
        <div class="ifc-header-right">
          <button class="ifc-language" id="ifc-language" type="button" title="Idioma" aria-label="Idioma">
            <img class="ifc-language-flag" id="ifc-language-flag" src="${getLangFlagUrl('es')}" alt="" aria-hidden="true" />
            <span id="ifc-language-code">ES</span>
          </button>
          <button class="ifc-close" id="ifc-close" title="Cerrar">×</button>
        </div>
      </div>

      <div class="ifc-body">
        <div class="ifc-actions">
          <button class="ifc-btn ifc-btn-primary" id="ifc-start" title="Analizar cuenta">Analizar cuenta</button>
          <button class="ifc-btn ifc-btn-danger" id="ifc-cancel" disabled title="Cancelar">Cancelar</button>
          <button class="ifc-btn ifc-btn-secondary" id="ifc-copy" disabled title="Copiar lista">Copiar lista</button>
          <div class="ifc-export-wrap">
            <button class="ifc-btn ifc-btn-secondary" id="ifc-export" disabled title="Opciones de exportación">Exportar</button>
            <div class="ifc-export-menu" id="ifc-export-menu" hidden>
              <button class="ifc-export-option" id="ifc-export-csv" type="button">Exportar CSV</button>
              <button class="ifc-export-option" id="ifc-export-json" type="button">Exportar JSON</button>
            </div>
          </div>
        </div>

        <div class="ifc-status" id="ifc-status">Abre Instagram con tu sesión iniciada y presiona “Analizar cuenta”.</div>
        <div id="ifc-error-container"></div>

        <div class="ifc-metrics">
          <div class="ifc-metric">
            <div class="ifc-metric-value" id="ifc-followers">0</div>
            <div class="ifc-metric-label" id="ifc-metric-followers">Seguidores</div>
          </div>
          <div class="ifc-metric">
            <div class="ifc-metric-value" id="ifc-following">0</div>
            <div class="ifc-metric-label" id="ifc-metric-following">Seguidos</div>
          </div>
          <div class="ifc-metric">
            <div class="ifc-metric-value" id="ifc-notback">0</div>
            <div class="ifc-metric-label" id="ifc-metric-notback">No te siguen</div>
          </div>
        </div>

        <div class="ifc-filter-grid">
          <input class="ifc-search" id="ifc-filter" placeholder="Buscar por usuario o nombre..." autocomplete="off" />
          <select class="ifc-select" id="ifc-filter-mode" title="Tipo de búsqueda">
            <option value="contains">Contiene</option>
            <option value="starts">Empieza por</option>
            <option value="exact">Coincide exacto</option>
          </select>
          <select class="ifc-select" id="ifc-account-type" title="Tipo de cuenta">
            <option value="all">Todas</option>
            <option value="verified">Verificadas</option>
            <option value="not_verified">No verificadas</option>
            <option value="private">Privadas</option>
            <option value="public">Públicas</option>
          </select>
        </div>
        <div class="ifc-filter-tools">
          <span id="ifc-filter-count">Mostrando 0 resultados</span>
          <button class="ifc-link-btn" id="ifc-clear-filter" type="button">Limpiar filtro</button>
        </div>

        <div class="ifc-selection-panel" id="ifc-selection-panel" style="display:none;">
          <div class="ifc-selection-row">
            <label class="ifc-check-label">
              <input class="ifc-checkbox" type="checkbox" id="ifc-select-all" checked />
              <span id="ifc-select-all-text">Seleccionar todo</span>
            </label>
            <span class="ifc-selected-count" id="ifc-selected-count">0 seleccionadas</span>
          </div>
          <div class="ifc-unfollow-options">
            <div class="ifc-label" id="ifc-speed-label">Velocidad para dejar de seguir</div>
            <div class="ifc-speed-toggle" id="ifc-speed-toggle">
              <label class="ifc-speed-option">
                <input type="radio" name="ifc-speed" value="balanced" checked />
                <div class="ifc-speed-card">
                  <span class="ifc-speed-name" id="ifc-speed-balanced">Equilibrada</span>
                  <small class="ifc-speed-hint" id="ifc-speed-balanced-hint">5 a 8 s por cuenta</small>
                </div>
              </label>
              <label class="ifc-speed-option">
                <input type="radio" name="ifc-speed" value="fast" />
                <div class="ifc-speed-card">
                  <span class="ifc-speed-name" id="ifc-speed-fast">Rápida</span>
                  <small class="ifc-speed-hint" id="ifc-speed-fast-hint">2.5 a 4.5 s por cuenta</small>
                </div>
              </label>
            </div>
          </div>
          <button class="ifc-btn ifc-btn-danger" id="ifc-unfollow" disabled>Dejar de seguir seleccionadas</button>
        </div>
        <div class="ifc-list-box">
          <div class="ifc-list-header">
            <span id="ifc-list-title">Cuentas detectadas</span>
            <span id="ifc-list-selected-small">0 seleccionadas</span>
          </div>
          <div class="ifc-list" id="ifc-list">
            <div class="ifc-empty">Todavía no hay resultados.</div>
          </div>
        </div>
      </div>

      <div class="ifc-footer">
        <div id="ifc-footer-text">La extensión usa tu sesión activa de Instagram desde el navegador. No solicita contraseña ni almacena credenciales. Puedes desmarcar cuentas para excluirlas antes de dejar de seguir.</div>
        <div class="ifc-copyright">
          <span id="ifc-copyright-text">© 2026 Juan Diego Castellanos · <a href="https://github.com/juandiegoc30" target="_blank" rel="noopener noreferrer">github.com/juandiegoc30</a></span>
        </div>
      </div>
    `;

    document.body.appendChild(root);
    bindEvents(root);

    return root;
  }

  function $(id) {
    return document.getElementById(id);
  }

  function setStatus(message) {
    const el = $('ifc-status');
    if (el) el.textContent = message;
  }

  function setError(message) {
    const container = $('ifc-error-container');
    if (!container) return;

    if (!message) {
      container.innerHTML = '';
      return;
    }

    container.innerHTML = `<div class="ifc-error">${escapeHtml(message)}</div>`;
  }

  function getSelectedUsers() {
    return state.notFollowingBack.filter((user) => state.selectedToUnfollow.has(normalizeUsername(user.username)));
  }

  function updateSelectionUi() {
    const panel = $('ifc-selection-panel');
    const selectAll = $('ifc-select-all');
    const count = $('ifc-selected-count');
    const total = state.notFollowingBack.length;
    const selected = getSelectedUsers().length;

    if (panel) panel.style.display = total ? 'grid' : 'none';
    if (count) count.textContent = tr('selectedOfTotal', { selected, total });
    const smallCount = $('ifc-list-selected-small');
    if (smallCount) smallCount.textContent = tr('selected', { selected });

    if (selectAll) {
      selectAll.checked = total > 0 && selected === total;
      selectAll.indeterminate = selected > 0 && selected < total;
    }
  }

  function refreshActionButtons() {
    const hasResults = state.notFollowingBack.length > 0;
    const hasSelected = getSelectedUsers().length > 0;
    const busy = state.isRunning || state.unfollowRunning;

    $('ifc-start').disabled = busy;
    $('ifc-cancel').disabled = !busy;
    $('ifc-copy').disabled = !hasResults;
    $('ifc-export').disabled = !hasResults;
    $('ifc-unfollow').disabled = !hasResults || !hasSelected || busy;
    updateSelectionUi();
  }

  function setRunning(isRunning) {
    state.isRunning = isRunning;
    refreshActionButtons();
  }

  function enableExportButtons(enabled) {
    const hasResults = Boolean(enabled) && state.notFollowingBack.length > 0;
    $('ifc-copy').disabled = !hasResults;
    $('ifc-export').disabled = !hasResults;
    refreshActionButtons();
  }

  function setUnfollowRunning(isRunning) {
    state.unfollowRunning = isRunning;
    refreshActionButtons();
  }

  function updateMetrics() {
    $('ifc-followers').textContent = String(state.followers.length);
    $('ifc-following').textContent = String(state.following.length);
    $('ifc-notback').textContent = String(state.notFollowingBack.length);

    if (state.currentUser?.username) {
      const accountText = `${tr('account')}: @${state.currentUser.username}`;
      $('ifc-account').textContent = accountText;
      $('ifc-account').title = accountText;
    }
  }

  function getFilteredResults() {
    const rawFilter = String($('ifc-filter')?.value || '').trim().toLowerCase();
    const filter = normalizeUsername(rawFilter);
    const mode = $('ifc-filter-mode')?.value || 'contains';
    const accountType = $('ifc-account-type')?.value || 'all';

    return state.notFollowingBack.filter((user) => {
      const username = normalizeUsername(user.username);
      const fullName = String(user.fullName || '').toLowerCase();

      if (accountType === 'verified' && !user.isVerified) return false;
      if (accountType === 'not_verified' && user.isVerified) return false;
      if (accountType === 'private' && !user.isPrivate) return false;
      if (accountType === 'public' && user.isPrivate) return false;

      if (!filter && !rawFilter) return true;

      if (mode === 'starts') {
        return username.startsWith(filter) || fullName.startsWith(rawFilter);
      }

      if (mode === 'exact') {
        return username === filter || fullName === rawFilter;
      }

      return username.includes(filter) || fullName.includes(rawFilter);
    });
  }

  function getVerifiedBadgeMarkup() {
    return `
      <span class="ifc-verified-badge" title="Verified" aria-label="Verified">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path class="ifc-verified-star" d="M12 1.7l2.15 2.03 2.96-.39 1.1 2.77 2.73 1.23-.76 2.89L22 12.6l-1.82 2.37.76 2.89-2.73 1.23-1.1 2.77-2.96-.39L12 23.5l-2.15-2.03-2.96.39-1.1-2.77-2.73-1.23.76-2.89L2 12.6l1.82-2.37-.76-2.89 2.73-1.23 1.1-2.77 2.96.39L12 1.7z"/>
          <path class="ifc-verified-check" d="M10.35 15.35l-3-3 1.35-1.35 1.65 1.65 4.95-4.95 1.35 1.35-6.3 6.3z"/>
        </svg>
      </span>
    `;
  }

  function renderList() {
    const list = $('ifc-list');
    const results = getFilteredResults();
    const counter = $('ifc-filter-count');

    if (counter) {
      counter.textContent = tr('showingResults', { shown: results.length, total: state.notFollowingBack.length });
    }

    if (!results.length) {
      list.innerHTML = `<div class="ifc-empty">${state.notFollowingBack.length ? tr('noFilterResults') : tr('noResultsYet')}</div>`;
      updateSelectionUi();
      return;
    }

    list.innerHTML = results.map((user) => {
      const username = normalizeUsername(user.username);
      const checked = state.selectedToUnfollow.has(username) ? 'checked' : '';
      const avatarInitial = escapeHtml((user.username || '?').slice(0, 1).toUpperCase());
      const avatarMarkup = user.profilePicUrl
        ? `<img class="ifc-avatar" src="${escapeHtml(user.profilePicUrl)}" alt="@${escapeHtml(user.username)}" loading="lazy" decoding="async" data-fallback="${avatarInitial}" />`
        : `<span class="ifc-avatar-fallback" aria-hidden="true">${avatarInitial}</span>`;

      return `
        <div class="ifc-row" data-username="${escapeHtml(user.username)}">
          <div class="ifc-user-wrap">
            <input class="ifc-checkbox ifc-user-checkbox" type="checkbox" data-username="${escapeHtml(user.username)}" ${checked} title="${escapeHtml(tr('includeUnfollow'))}" />
            ${avatarMarkup}
            <div class="ifc-user">
              <div class="ifc-username">
                <span>@${escapeHtml(user.username)}</span>
                ${user.isVerified ? getVerifiedBadgeMarkup() : ''}
              </div>
              <div class="ifc-fullname">${escapeHtml(user.fullName || (user.isPrivate ? tr('privateAccount') : ''))}</div>
            </div>
          </div>
          <button class="ifc-open" type="button" data-profile-url="${escapeHtml(user.profileUrl)}">${escapeHtml(tr('open'))}</button>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.ifc-user-checkbox').forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        const username = normalizeUsername(event.currentTarget.dataset.username);
        if (!username) return;

        if (event.currentTarget.checked) state.selectedToUnfollow.add(username);
        else state.selectedToUnfollow.delete(username);

        refreshActionButtons();
      });
    });

    list.querySelectorAll('.ifc-avatar').forEach((img) => {
      img.addEventListener('error', () => {
        const fallback = document.createElement('span');
        fallback.className = 'ifc-avatar-fallback';
        fallback.setAttribute('aria-hidden', 'true');
        fallback.textContent = img.dataset.fallback || '?';
        img.replaceWith(fallback);
      }, { once: true });
    });

    list.querySelectorAll('.ifc-open').forEach((button) => {
      button.addEventListener('click', () => {
        const profileUrl = button.dataset.profileUrl;
        if (profileUrl) window.open(profileUrl, '_blank', 'noreferrer');
      });
    });

    updateSelectionUi();
  }

  function escapeHtml(value) {
    return String(value || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function toCsv(rows) {
    const header = ['username', 'user_id', 'full_name', 'profile_url', 'is_private', 'is_verified'];
    const escapeCsv = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
    const body = rows.map((user) => [
      user.username,
      user.userId,
      user.fullName,
      user.profileUrl,
      user.isPrivate,
      user.isVerified
    ].map(escapeCsv).join(','));

    return [header.join(','), ...body].join('\n');
  }

  async function copyResults() {
    const text = state.notFollowingBack.map((user) => `@${user.username}`).join('\n');
    await navigator.clipboard.writeText(text);
    setStatus(tr('copied'));
  }

  function getUnfollowDelay() {
    const speed = document.querySelector('input[name="ifc-speed"]:checked')?.value || 'balanced';

    const ranges = {
      balanced: [5000, 8000],
      fast: [2500, 4500]
    };

    const [min, max] = ranges[speed] || ranges.balanced;
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  function getUnfollowSpeedLabel() {
    const speed = document.querySelector('input[name="ifc-speed"]:checked')?.value || 'balanced';

    if (speed === 'fast') return tr('speedFast');
    return tr('speedBalanced');
  }

  async function unfollowAllNotFollowingBack() {
    if (state.unfollowRunning || state.isRunning || !state.notFollowingBack.length) return;

    const usersToUnfollow = getSelectedUsers();
    const total = usersToUnfollow.length;

    if (!total) {
      setError(tr('noSelected'));
      return;
    }

    const confirmed = confirm(tr('confirmUnfollow', {
      total,
      speed: getUnfollowSpeedLabel()
    }));

    if (!confirmed) return;

    setError('');
    setUnfollowRunning(true);
    state.unfollowCancel = false;

    const succeeded = [];
    const failed = [];

    try {
      for (let i = 0; i < usersToUnfollow.length; i += 1) {
        if (state.unfollowCancel || state.shouldCancel) {
          setStatus(tr('unfollowCanceled'));
          break;
        }

        const user = usersToUnfollow[i];
        setStatus(tr('unfollowingUser', { username: user.username, current: i + 1, total }));

        try {
          await unfollowUser(user);
          succeeded.push(user.username);
        } catch (error) {
          failed.push({ username: user.username, error: error.message || String(error) });
        }

        updateMetrics();

        if (i < usersToUnfollow.length - 1 && !(state.unfollowCancel || state.shouldCancel)) {
          const delay = getUnfollowDelay();
          setStatus(tr('pauseBeforeNext', { seconds: (delay / 1000).toFixed(1), current: i + 1, total }));
          await sleep(delay);
        }
      }

      if (succeeded.length) {
        const succeededSet = new Set(succeeded.map(normalizeUsername));
        state.following = state.following.filter((user) => !succeededSet.has(normalizeUsername(user.username)));
        state.notFollowingBack = state.notFollowingBack.filter((user) => !succeededSet.has(normalizeUsername(user.username)));
        for (const username of succeededSet) state.selectedToUnfollow.delete(username);
      }

      updateMetrics();
      renderList();
      enableExportButtons(state.notFollowingBack.length > 0);

      window.instagramFollowbackUnfollowResult = {
        succeeded,
        failed,
        generatedAt: new Date().toISOString()
      };

      setStatus(tr('unfollowDone', { success: succeeded.length, failed: failed.length }));

      if (failed.length) {
        setError(tr('unfollowFailed'));
      }
    } finally {
      state.unfollowCancel = false;
      state.shouldCancel = false;
      setUnfollowRunning(false);
    }
  }

  async function runAnalysis() {
    if (state.isRunning) return;

    setRunning(true);
    setError('');
    enableExportButtons(false);
    state.shouldCancel = false;
    state.followers = [];
    state.following = [];
    state.notFollowingBack = [];
    state.selectedToUnfollow.clear();
    updateMetrics();
    renderList();

    try {
      setStatus(tr('detecting'));
      state.currentUser = await getCurrentUser();
      updateMetrics();

      setStatus(tr('readingFollowers', { username: state.currentUser.username }));
      state.followers = await getRelationshipList(state.currentUser.userId, 'followers', ({ count }) => {
        setStatus(tr('readingFollowersProgress', { count }));
        updateMetrics();
      });
      updateMetrics();

      await sleep(1200);

      setStatus(tr('readingFollowing', { username: state.currentUser.username }));
      state.following = await getRelationshipList(state.currentUser.userId, 'following', ({ count }) => {
        setStatus(tr('readingFollowingProgress', { count }));
        updateMetrics();
      });
      updateMetrics();

      state.notFollowingBack = compareLists(state.followers, state.following);
      state.notFollowingBack.sort((a, b) => a.username.localeCompare(b.username));
      state.selectedToUnfollow = new Set(state.notFollowingBack.map((user) => normalizeUsername(user.username)));

      updateMetrics();
      renderList();
      enableExportButtons(state.notFollowingBack.length > 0);
      setStatus(tr('analysisDone', { count: state.notFollowingBack.length }));

      window.instagramFollowbackResult = {
        account: state.currentUser,
        followers: state.followers,
        following: state.following,
        notFollowingBack: state.notFollowingBack,
        generatedAt: new Date().toISOString()
      };
    } catch (error) {
      setError(error.message || String(error));
      setStatus(tr('analysisError'));
    } finally {
      setRunning(false);
    }
  }

  function bindEvents(root) {
    root.querySelector('#ifc-close').addEventListener('click', () => root.remove());
    root.querySelector('#ifc-language').addEventListener('click', async () => {
      await saveLanguagePreference(currentLang === 'es' ? 'en' : 'es');
      applyTranslations();
      updateMetrics();
    });
    root.querySelector('#ifc-start').addEventListener('click', runAnalysis);
    root.querySelector('#ifc-cancel').addEventListener('click', () => {
      state.shouldCancel = true;
      state.unfollowCancel = true;
      setStatus(tr('canceling'));
    });
    root.querySelector('#ifc-filter').addEventListener('input', renderList);
    root.querySelector('#ifc-filter-mode').addEventListener('change', () => { applyTranslations(); renderList(); });
    root.querySelector('#ifc-account-type').addEventListener('change', () => { applyTranslations(); renderList(); });
    root.querySelector('#ifc-clear-filter').addEventListener('click', () => {
      $('ifc-filter').value = '';
      $('ifc-filter-mode').value = 'contains';
      $('ifc-account-type').value = 'all';
      renderList();
    });
    root.querySelector('#ifc-select-all').addEventListener('change', (event) => {
      if (event.currentTarget.checked) {
        state.selectedToUnfollow = new Set(state.notFollowingBack.map((user) => normalizeUsername(user.username)));
      } else {
        state.selectedToUnfollow.clear();
      }
      renderList();
      refreshActionButtons();
    });
    root.querySelector('#ifc-unfollow').addEventListener('click', unfollowAllNotFollowingBack);
    root.querySelector('#ifc-copy').addEventListener('click', copyResults);
    root.querySelector('#ifc-export').addEventListener('click', (event) => {
      event.stopPropagation();
      const menu = $('ifc-export-menu');
      if (menu) menu.hidden = !menu.hidden;
    });
    root.querySelector('#ifc-export-csv').addEventListener('click', () => {
      const menu = $('ifc-export-menu');
      if (menu) menu.hidden = true;
      downloadFile('instagram-no-followback.csv', toCsv(state.notFollowingBack), 'text/csv;charset=utf-8');
    });
    root.querySelector('#ifc-export-json').addEventListener('click', () => {
      const menu = $('ifc-export-menu');
      if (menu) menu.hidden = true;
      downloadFile('instagram-no-followback.json', JSON.stringify({
        account: state.currentUser,
        notFollowingBack: state.notFollowingBack,
        followersCount: state.followers.length,
        followingCount: state.following.length,
        generatedAt: new Date().toISOString()
      }, null, 2), 'application/json;charset=utf-8');
    });
    document.addEventListener('click', (event) => {
      const menu = $('ifc-export-menu');
      const button = $('ifc-export');
      if (!menu || menu.hidden) return;
      if (menu.contains(event.target) || button?.contains(event.target)) return;
      menu.hidden = true;
    });
  }

  async function togglePanel() {
    const existing = document.getElementById('ifc-root');
    if (existing) {
      existing.remove();
      return;
    }

    await loadLanguagePreference();
    createPanel();
    applyTranslations();
  }

  chrome.runtime.onMessage.addListener((message) => {
    if (message?.type === 'IFC_TOGGLE_PANEL') {
      togglePanel();
    }
  });
})();
