(function exposeCore(global) {
  function normalizeUsername(username) {
    return String(username || '').trim().replace(/^@/, '').toLowerCase();
  }

  function compareLists(followers, following) {
    const followersSet = new Set(followers.map((user) => normalizeUsername(user.username)));
    return following.filter((user) => !followersSet.has(normalizeUsername(user.username)));
  }

  function filterResults(users, options = {}) {
    const rawQuery = String(options.query || '').trim().toLowerCase();
    const query = normalizeUsername(rawQuery);
    const mode = options.mode || 'contains';
    const accountType = options.accountType || 'all';

    return users.filter((user) => {
      const username = normalizeUsername(user.username);
      const fullName = String(user.fullName || '').toLowerCase();

      if (accountType === 'verified' && !user.isVerified) return false;
      if (accountType === 'not_verified' && user.isVerified) return false;
      if (accountType === 'private' && !user.isPrivate) return false;
      if (accountType === 'public' && user.isPrivate) return false;

      if (!query && !rawQuery) return true;

      if (mode === 'starts') {
        return username.startsWith(query) || fullName.startsWith(rawQuery);
      }

      if (mode === 'exact') {
        return username === query || fullName === rawQuery;
      }

      return username.includes(query) || fullName.includes(rawQuery);
    });
  }

  function updateVisibleSelection(selectedUsernames, visibleUsers, checked) {
    const nextSelection = new Set(selectedUsernames);

    for (const user of visibleUsers) {
      const username = normalizeUsername(user.username);
      if (!username) continue;

      if (checked) nextSelection.add(username);
      else nextSelection.delete(username);
    }

    return nextSelection;
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

  const core = {
    normalizeUsername,
    compareLists,
    filterResults,
    updateVisibleSelection,
    toCsv
  };

  global.IFCCore = core;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = core;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
