import axios from 'axios';

const api = axios.create({
  baseURL: '/api'
});

const encodeId = (id) => encodeURIComponent(id);

// ============ Review API ============

export const getGroups = () =>
  api.get('/review/groups').then(res => res.data);

export const getGroupDiff = (nodeUuid) =>
  api.get(`/review/groups/${encodeId(nodeUuid)}/diff`).then(res => res.data);

export const rollbackGroup = (nodeUuid) =>
  api.post(`/review/groups/${encodeId(nodeUuid)}/rollback`, {}).then(res => res.data);

export const approveGroup = (nodeUuid) =>
  api.delete(`/review/groups/${encodeId(nodeUuid)}`).then(res => res.data);

export const clearAll = () =>
  api.delete('/review').then(res => res.data);
