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
import { createClient } from "@liveblocks/client";
import { RoomProvider } from "@/utils/liveblocks.config";

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY
});

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
                <Link href={'/'}>
                  <div className="logo">
                    {/* <img src="/assets/images/pluto-logo-blue.svg" alt="" className="img-fluid"/> */}
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.00370907 29.1258C0.00370907 28.0504 0.00370907 26.9749 0.00370907 25.9032C0.0333527 25.7845 0.0778109 25.6621 0.0889272 25.5397C0.270494 23.2479 0.733644 21.0116 1.44509 18.8236C1.57108 18.438 1.74156 18.3378 2.12322 18.3415C3.95 18.3601 5.7731 18.3527 7.59989 18.3452C7.82962 18.3452 8.06677 18.3267 8.28909 18.2748C8.8375 18.1524 9.16726 17.6963 9.14503 17.1363C9.11539 16.4687 8.62627 16.0534 7.80737 16.0423C6.71426 16.0274 5.62487 16.0386 4.53176 16.0386C3.89442 16.0386 3.26078 16.0386 2.53081 16.0386C2.86059 15.3933 3.17186 14.8518 3.42013 14.2844C3.6054 13.8617 3.86105 13.7393 4.32052 13.7393C9.29695 13.7578 14.2734 13.7541 19.2498 13.7504C20.0798 13.7504 20.606 13.3054 20.6171 12.623C20.632 11.9481 20.102 11.4882 19.2831 11.466C19.1386 11.466 18.9979 11.466 18.8533 11.466C14.5217 11.466 10.19 11.466 5.8583 11.466H5.1728C5.76196 10.7428 6.25847 10.1569 6.72536 9.54869C6.9551 9.2483 7.21822 9.14817 7.59247 9.15188C10.6346 9.16672 13.6768 9.15929 16.7227 9.15929C16.9376 9.15929 17.1562 9.16301 17.3637 9.12963C17.8751 9.04063 18.1901 8.73653 18.2827 8.21734C18.4198 7.43485 17.8862 6.88228 16.9562 6.87857C14.6477 6.87115 12.3391 6.87857 10.0269 6.87857C9.86018 6.87857 9.68974 6.86374 9.47482 6.85261C16.9302 0.12169 28.5468 -2.28512 38.9517 2.52109C49.679 7.47564 54.459 17.7445 54.7999 25.2319C54.6035 25.2319 54.4108 25.2319 54.2144 25.2319C51.9393 25.2319 49.6678 25.2319 47.3927 25.2319C47.1778 25.2319 46.9592 25.2319 46.7517 25.269C46.2514 25.3543 45.892 25.7585 45.8476 26.2629C45.8031 26.7784 46.0662 27.2493 46.5479 27.4088C46.7962 27.4904 47.0741 27.5126 47.3372 27.5126C49.6827 27.5201 52.0282 27.5163 54.3701 27.5163H55C54.9518 28.3063 54.9111 29.0294 54.8629 29.8008H54.1255C47.3223 29.8008 40.5228 29.8008 33.7196 29.8008C33.4528 29.8008 33.1823 29.8156 32.9229 29.8749C32.4227 29.9862 32.1003 30.4127 32.0892 30.9207C32.0781 31.4511 32.4042 31.9109 32.9192 32.0259C33.1786 32.0852 33.4491 32.1 33.7159 32.1C40.4302 32.1038 47.1407 32.1 53.855 32.1H54.5665C54.3886 32.9159 54.2293 33.6428 54.0699 34.3845H53.3807C48.3339 34.3845 43.2834 34.3845 38.2365 34.3845C37.9697 34.3845 37.6955 34.3993 37.4436 34.4698C36.9359 34.6181 36.6247 35.1077 36.6766 35.6194C36.7284 36.1497 37.0953 36.5577 37.6251 36.6318C37.8549 36.6652 38.0883 36.6615 38.3218 36.6615C43.1203 36.6615 47.9152 36.6615 52.7138 36.6615C52.9176 36.6615 53.1176 36.6615 53.3993 36.6615C53.1362 37.3142 52.8916 37.8519 52.7063 38.4082C52.5581 38.8532 52.3135 38.983 51.843 38.983C42.0161 38.9682 32.1893 38.9719 22.3624 38.9719C22.1104 38.9719 21.8584 38.9682 21.6139 38.9979C21.0692 39.0683 20.669 39.5059 20.6319 40.0437C20.5986 40.5443 20.9284 41.0375 21.4397 41.1747C21.6954 41.2415 21.9696 41.2526 22.2364 41.2526C31.689 41.2526 41.1379 41.2526 50.5905 41.2526H51.2908C50.8499 41.9276 50.4571 42.4838 50.1199 43.0698C49.9013 43.448 49.6271 43.5482 49.2084 43.5482C44.0874 43.5333 38.9702 43.5408 33.8493 43.5408C33.7048 43.5408 33.564 43.5371 33.4195 43.5408C32.5857 43.5741 32.0892 44.0118 32.0966 44.7052C32.104 45.3802 32.5857 45.8066 33.3898 45.8437C33.5343 45.8511 33.6752 45.8437 33.8197 45.8437C38.2773 45.8437 42.735 45.8437 47.1926 45.8437C47.389 45.8437 47.5854 45.8437 47.7818 45.8437C47.2 46.5966 46.6071 47.2196 45.9624 47.7833C45.7475 47.9724 45.4066 48.1133 45.125 48.1133C39.0221 48.1319 32.9155 48.1282 26.8126 48.1282C26.5644 48.1282 26.3087 48.1319 26.0678 48.1912C25.512 48.3284 25.1971 48.7809 25.2267 49.3409C25.2563 49.886 25.6417 50.3088 26.2012 50.3829C26.4124 50.4126 26.6311 50.4089 26.8423 50.4089C31.8558 50.4089 36.8656 50.4089 41.879 50.4089C42.0643 50.4089 42.2496 50.4089 42.5608 50.4089C42.4015 50.5498 42.357 50.6017 42.3014 50.6351C39.363 52.5116 36.1948 53.8318 32.7599 54.4623C31.5148 54.6922 30.2513 54.8257 28.9989 55H25.8826C25.4935 54.9555 25.1081 54.911 24.7191 54.8665C18.8237 54.2101 13.6175 51.959 9.20062 47.991C4.47988 43.7484 1.53773 38.4861 0.426091 32.2224C0.244524 31.1878 0.140807 30.1383 0 29.0962L0.00370907 29.1258Z" fill="#4053FF" />
                    </svg>
                  </div>
                </Link>
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
                {(editor) => (
                  <RoomProvider client={client} id={uniqueRoomId}>
                    <AiChat editor={editor} />
                  </RoomProvider>
                )}
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
