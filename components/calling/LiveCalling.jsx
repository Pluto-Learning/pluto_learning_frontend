import { useEffect, useState } from 'react';
import {
    ControlBar,
    GridLayout,
    LiveKitRoom,
    ParticipantTile,
    RoomAudioRenderer,
    useTracks,
    VideoConference,
} from '@livekit/components-react';
import '@livekit/components-styles';
import { Track } from 'livekit-client';
import { Rnd } from 'react-rnd';

export default function LiveCalling({ username = 'quickstart-user', roomId = 'quickstart-room' }) {
    const [token, setToken] = useState('');
    const [rnd, setRnd] = useState({ width: 100, height: 100, x: 0, y: 0 });

    const getToken = async () => {
        try {
            const resp = await fetch(`/api/get-participant-token?room=${roomId}&username=${username}`);
            const data = await resp.json();
            setToken(data.token || '');
        } catch (e) {
            console.error("Error fetching token:", e);
        }
    };

    useEffect(() => {
        getToken();

        // Set initial position to the bottom-right corner after mounting
        const initialX = window.innerWidth - 450; // window width - element width (100px) - margin
        const initialY = window.innerHeight - 265; // window height - element height (100px) - margin
        setRnd({ width: 100, height: 100, x: initialX, y: initialY });
    }, []);

    if (token === '') {
        return <div className="voice-call-loader"></div>;
    }

    const setPosition = (e, { x, y }) => {
        setRnd(prev => ({ ...prev, x, y }));
    };

    const setSize = (e, direction, ref, delta, position) => {
        setRnd(prev => ({
            ...prev,
            width: parseInt(ref.style.width, 10),
            height: parseInt(ref.style.height, 10),
            ...position,
        }));
    };

    return (
        <Rnd
            size={{ width: rnd.width, height: rnd.height }}
            position={{ x: rnd.x, y: rnd.y }}
            onDragStop={setPosition}
            onResizeStop={setSize}
        >
            <div className="live-call" style={{ width: '100%', height: '100%' }}>
                <LiveKitRoom
                    video
                    audio
                    token={token}
                    serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
                    data-lk-theme="default"
                    onDisconnected={() => setToken('')}
                >
                    <MyVideoConference />
                    <RoomAudioRenderer />
                    <ControlBar />
                </LiveKitRoom>
            </div>
        </Rnd>
    );
}

function MyVideoConference() {
    const tracks = useTracks(
        [
            { source: Track.Source.Camera, withPlaceholder: true },
            { source: Track.Source.ScreenShare, withPlaceholder: false },
        ],
        { onlySubscribed: false },
    );

    return (
        <GridLayout  tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
            <ParticipantTile />
        </GridLayout>
    );
}
