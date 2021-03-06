export const restoreProfiles = (data) => ({
  type: 'RESTORE_PROFILES',
  data,
});

export const updateChart = (data) => ({
  type: 'UPDATE_CHART',
  ...data,
});

export const resetChart = (chart) => ({
  type: 'RESET_CHART',
  chart,
});

export const createProfile = (name, photo) => ({
  type: 'CREATE_PROFILE',
  name,
  photo,
});

export const deleteProfile = (name) => ({
  type: 'DELETE_PROFILE',
  name,
});

export const setActiveProfile = (name) => ({
  type: 'SET_ACTIVE_PROFILE',
  name,
});
