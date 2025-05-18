import React from 'react'

type Props = {
  areas: any[]
  onChange: (areaId: number | undefined) => void
}

const AreaFilter = ({ areas, onChange }: Props) => {
  return (
    <select
      className="border px-4 py-2 rounded"
      onChange={(e) => {
        const val = e.target.value
        onChange(val ? parseInt(val) : undefined)
      }}
    >
      <option value="">All Locations</option>
      {areas.map((area) => (
        <option key={area.id} value={area.id}>{area.name}</option>
      ))}
    </select>
  )
}

export default AreaFilter