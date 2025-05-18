import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPlayer } from '../api/api'
import PlayerDetail from '../components/PlayerDetail'

const PlayerPage = () => {
  const { id } = useParams<{ id: string }>()
  const [player, setPlayer] = useState<any>(null)

  useEffect(() => {
    if (id) {
      fetchPlayer(parseInt(id)).then(setPlayer)
    }
  }, [id])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Player Details</h1>
      {player ? <PlayerDetail player={player} /> : <p>Loading...</p>}
    </div>
  )
}

export default PlayerPage