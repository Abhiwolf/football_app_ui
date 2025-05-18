import React from 'react'

const MatchList = ({ matches }: { matches: any[] }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Matches</h2>
    <ul className="space-y-2">
      {matches.map((match) => (
        <li key={match.id} className="border p-2 rounded">
          Match #{match.id} on {new Date(match.match_date).toLocaleString()}
        </li>
      ))}
    </ul>
  </div>
)

export default MatchList