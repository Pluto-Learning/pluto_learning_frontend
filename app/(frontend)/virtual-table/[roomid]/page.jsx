"use client";
import HomeLayout from '@/layouts/homeLayout/HomeLayout';
import React, { useEffect, useState } from 'react';
import { useSyncDemo, createPresenceStateDerivation } from '@tldraw/sync';
import { Tldraw, useTldrawUser } from 'tldraw';
import 'tldraw/tldraw.css';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Loader from '@/components/Loader/Loader';

import Link from 'next/link';
import { updateTableLastTime } from '@/app/api/crud';
import { Rnd } from 'react-rnd';
import LiveCalling from '@/components/calling/LiveCalling';
import AiChat from '@/components/AiChat/AiChat';

export default function Page() {

  const router = useRouter()
  const pathname = usePathname()

  const uniqueRoomId = pathname.split("/").pop();

  console.log('pathnamepathname tableId:', uniqueRoomId);

  const { data: session } = useSession()

  console.log('sessionsessionsessionsession', session)

  const [userPreferences, setUserPreferences] = useState({
    id: 'user-' + Math.random(),
    name: session?.user?.id ?? 'sakib',
    color: 'palevioletred',
    // colorScheme: 'dark',
  })

  useEffect(() => {
    setUserPreferences({
      id: session?.user?.id,
      name: session?.user?.id ?? 'sakib',
      color: 'palevioletred',
      // colorScheme: 'dark',
    })
  }, [session])

  // [2]
  const store = useSyncDemo({ roomId: uniqueRoomId, userInfo: userPreferences })

  // [3]
  const user = useTldrawUser({ userPreferences, setUserPreferences })

  // Create a presence state derivation for the current user
  const derivePresenceState = (str) => {
    console.log('sssssssssss', str)
  };

  const updateTableLastActive = async () => {
    try {
      await updateTableLastTime(uniqueRoomId)
    } catch (error) {
      console.error("Error Update Table Last Active:", error);
    }
  }

  const [value, setValue] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 1); // increment the value every 5 seconds
      updateTableLastActive()
    }, 5000);

    return () => clearInterval(interval); // cleanup on component unmount
  }, []);



  // const [rnd, setRnd] = useState({ width: '100px', height: '100px', x: 10, y: 10 })
  //   const setPosition = (e, direction) => {
  //       setRnd((prev) => ({
  //           ...prev,
  //           x: direction.x,
  //           y: direction.y
  //       }))
  //   }

  //   const setSize = (e, direction, ref, delta, position) => {
  //       setRnd((prev) => ({
  //           ...prev,
  //           width: parseInt(ref.style.width, 10),
  //           height: parseInt(ref.style.height, 10),
  //           ...position
  //       }))
  //   }

  // const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <HomeLayout>
      <div className="whiteboard-area">
        <div className="virtual-table whiteboard">

          {
            uniqueRoomId && session?.user?.id ?
              <>
                <Tldraw
                  store={store}
                  user={user}
                />
                <Link href={'/table-discovery'} type='button' className="btn pluto-pink-btn leave-button ">Back to Tables</Link>

                {/* <Rnd
                  // style={{ backgroundColor: 'pink' }}
                  size={{ width: rnd.width, height: rnd.height }}
                  position={{ x: rnd.x, y: rnd.y }}
                  onDragStop={setPosition}
                  onResizeStop={setSize}
                >
                </Rnd> */}
                <LiveCalling username={session?.user?.id} roomId={uniqueRoomId} />
                <Link href={'/table-discovery'} type='button' className="btn pluto-pink-btn leave-button ">Back to Table Discovery</Link>
                <AiChat />
              </>
              :
              <>
                <Loader />
              </>
          }
        </div>
      </div>
    </HomeLayout>
  );
}
