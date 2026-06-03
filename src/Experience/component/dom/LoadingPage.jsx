import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import { gsap } from "gsap";

export default function LoadingPage() {
    const { loaded, total } = useProgress();

    const barRef = useRef(null);

    const [show, setShow] = useState(true);
    const [showBar, setShowBar] = useState(true);

    const removeLoadingPage = () => {
        setTimeout(() => {
            setShow(false);
        }, 1000);
    };

    useEffect(() => {
        if (!barRef.current) return;
        if (!total) return;

        const progress = loaded / total;

        gsap.to(barRef.current, {
            scaleX: progress,
            duration: 0.3,
            ease: "power2.out",

            onComplete: () => {
                gsap.delayedCall(1, () => {
                    setShowBar(false);
                    removeLoadingPage();
                });
            },
        });
    }, [loaded, total]);

    // remove this page
    if (!show) return null;

    return (
        <>
            <div
                className="loading-background"
                style={{ opacity: showBar ? 1 : 0 }}
            >
                {showBar && <div ref={barRef} className="loading-bar" />}
            </div>
        </>
    );
}
