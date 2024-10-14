"use client"
import HomeLayout from '@/layouts/homeLayout/HomeLayout'
import React from 'react'
import { useSyncDemo } from '@tldraw/sync'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function page() {
  const store = useSyncDemo({ roomId: 'my-unique-room-id' })
  return (
    <HomeLayout>
      <div className="whiteboard-area">
        <div className="virtual-table whiteboard">
          <Tldraw store={store} />
        </div>
      </div>
    </HomeLayout>
  )
}
