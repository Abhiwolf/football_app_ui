import React from 'react'

const PlayerDetail = ({ player }: { player: any }) => (
  <div className="border p-4 rounded">
    <h2 className="text-xl font-bold mb-2">{player.name}</h2>
    <p><strong>Position:</strong> {player.position}</p>
    <p><strong>Nationality:</strong> {player.nationality}</p>
    <p><strong>Team ID:</strong> {player.team_id}</p>
  </div>
)

export default PlayerDetail