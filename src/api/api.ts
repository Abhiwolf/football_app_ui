import axios from 'axios'

const API_BASE = 'http://localhost:8000'

export const fetchTeams = async (area?: string) => {
  const res = await axios.get(`${API_BASE}/teams`, { params: { area } })
  return res.data
}

export const fetchMatches = async (area_id?: number) => {
  const res = await axios.get(`${API_BASE}/matches`, { params: { area_id } })
  return res.data
}

export const fetchPlayer = async (id: number) => {
  const res = await axios.get(`${API_BASE}/players/${id}`)
  return res.data
}

export const fetchAreas = async () => {
  const res = await axios.get(`${API_BASE}/areas`)
  return res.data
}