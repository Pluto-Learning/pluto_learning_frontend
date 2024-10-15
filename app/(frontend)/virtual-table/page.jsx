"use client";
import HomeLayout from '@/layouts/homeLayout/HomeLayout';
import React, { useEffect, useState } from 'react';
import { useSyncDemo, createPresenceStateDerivation } from '@tldraw/sync';
import { Tldraw, useTldrawUser } from 'tldraw';
import 'tldraw/tldraw.css';
import { useSession } from 'next-auth/react';

export default function Page() {

  const {data: session} = useSession()

  console.log('sessionsessionsessionsession', session)

  const [userPreferences, setUserPreferences] = useState({
		id: 'user-' + Math.random(),
		name: session?.user?.id ?? 'sakib',
		color: 'palevioletred',
		// colorScheme: 'dark',
	})

  useEffect(()=>{
    setUserPreferences({
      id: session?.user?.id,
      name: session?.user?.id ?? 'sakib',
      color: 'palevioletred',
      // colorScheme: 'dark',
    })
  },[session])



  // [2]
	const store = useSyncDemo({ roomId: 'my-unique-room-id', userInfo: userPreferences })

	// [3]
	const user = useTldrawUser({ userPreferences, setUserPreferences })

  // Create a presence state derivation for the current user
  const derivePresenceState = (str) => {
    console.log('sssssssssss',str)
  };

  return (
    <HomeLayout>
      <div className="whiteboard-area">
        <div className="virtual-table whiteboard">
          <Tldraw
            store={store}
            user={user}
            
          />
        </div>
      </div>
    </HomeLayout>
  );
}
