import React, { useEffect, useState } from 'react'
import { fetchTeams, fetchMatches, fetchAreas } from '../api/api'
import TeamList from '../components/TeamList'
import MatchList from '../components/MatchList'
import AreaFilter from '../components/AreaFilter'

const Home = () => {
  const [teams, setTeams] = useState([])
  const [matches, setMatches] = useState([])
  const [areas, setAreas] = useState([])
  const [selectedAreaId, setSelectedAreaId] = useState<number | undefined>()

  useEffect(() => {
    fetchAreas().then(setAreas)
  }, [])

  useEffect(() => {
    fetchTeams().then(setTeams)
  }, [])

  useEffect(() => {
    fetchMatches(selectedAreaId).then(setMatches)
  }, [selectedAreaId])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Football Explorer</h1>
      <AreaFilter areas={areas} onChange={setSelectedAreaId} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TeamList teams={teams} />
        <MatchList matches={matches} />
      </div>
    </div>
  )
}

export default Home