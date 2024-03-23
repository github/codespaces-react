import React, { useState, useEffect, useRef } from 'react';
import RaceTrack from './RaceTrack';
import RaceCar from './RaceCar';

const Game = () => {
    const [carPosition, setCarPosition] = useState({ x: 50, y: 100 });
    const [carRotation, setCarRotation] = useState(0);
    const keysPressed = useRef({});

    useEffect(() => {
        const handleKeyDown = (e) => {
            keysPressed.current[e.key] = true;
        };

        const handleKeyUp = (e) => {
            delete keysPressed.current[e.key];
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // Game loop
        const gameLoop = () => {
            let rotationChange = 0;
            let speed = 0;
            if (keysPressed.current['ArrowLeft']) rotationChange -= 2;
            if (keysPressed.current['ArrowRight']) rotationChange += 2;
            if (keysPressed.current['ArrowUp']) speed = 5;
            if (keysPressed.current['ArrowDown']) speed = -5;

            const angleRad = ((carRotation + rotationChange) * Math.PI) / 180;
            setCarPosition((prevPosition) => ({
                x: prevPosition.x + Math.cos(angleRad) * speed,
                y: prevPosition.y + Math.sin(angleRad) * speed,
            }));
            setCarRotation((prevRotation) => prevRotation + rotationChange);
        };

        const intervalId = setInterval(gameLoop, 16);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [carRotation]); // Dependency to ensure updates, might need reevaluation

    return (
        <div>
            <RaceTrack>
                <RaceCar position={carPosition} rotation={carRotation} />
            </RaceTrack>
        </div>
    );
};

export default Game;
