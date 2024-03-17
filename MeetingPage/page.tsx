import { useEffect, useRef } from "react";
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";
import generateSignature from "@/app/functionsConstants";

type Payload = {
    role: string,
    sdkKey: string,
    sdkSecret: string
    passWord: string,
    userName: string,
    userEmail: string,
    url: string,
    meetingNumber: string
}

const ZoomWindow = ({ payload }: { payload: Payload }) => {
    
    const meetingSDKElementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const joinMeeting = async () => {
            try {
                const client = ZoomMtgEmbedded.createClient();
                const signature = generateSignature('x25qqZ0RXWBlsR8FGYLA', 'KK9RDpQD8NmSwEi1sfdDyA2DDqnDZOWF', 92041265407, 0);
                
                if (meetingSDKElementRef.current) {
                    await client.init({
                        zoomAppRoot: meetingSDKElementRef.current,
                        language: 'en-US',
                        patchJsMedia: true
                    });
                    await client.join({
                        sdkKey: 'x25qqZ0RXWBlsR8FGYLA',
                        signature: signature, 
                        meetingNumber: '92041265407',
                        password: 'w88tiP',
                        userName: 'Arjun'
                    });
                    console.log('Joined meeting successfully');
                } else {
                    console.error('Meeting SDK element not found');
                }
            } catch (error) {
                console.error('Error joining meeting:', error);
            }
        };

        joinMeeting();
    }, [payload]);

    return (
        <div id="meetingSDKElement" ref={meetingSDKElementRef}>
            Zoom goes in here
        </div>
    );
};

export default ZoomWindow;
