import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span style={{alignContent: "flex-start"}}>
        <h2>Donuts Lab</h2>
      </span>
      <span style={{alignContent: "flex-end"}}>
        <Link href={"/"}><h5>All Donuts</h5></Link>
      </span>
    </div>
  )
}