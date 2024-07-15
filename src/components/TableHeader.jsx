import React from 'react'

function TableHeader({ oncolumCLick }) {
  return (
    <thead>
      <tr>
        <th onClick={() => oncolumCLick('nome')}>Nome</th>
        <th onClick={() => oncolumCLick('idade')}>Idade</th>
        <th onClick={() => oncolumCLick('cargo')}>Cargo</th>
      </tr>
    </thead>
  )
}

export default TableHeader