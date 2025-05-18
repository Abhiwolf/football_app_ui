import React from 'react'
import { Link } from 'react-router-dom'

const TeamList = ({ teams }: { teams: any[] }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Teams</h2>
    <ul className="space-y-2">
      {teams.map((team) => (
        <li key={team.id} className="border p-2 rounded">
          <div className="font-medium">{team.name}</div>
          <div className="text-sm text-gray-500">Founded: {team.founded}</div>
          <div className="text-sm text-gray-500">Stadium: {team.stadium}</div>
        </li>
      ))}
    </ul>
  </div>
)

export default TeamList