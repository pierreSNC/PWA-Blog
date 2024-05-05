import React, {useEffect, useState} from 'react';
import './ConnectionStatus.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const ConnectionStatus: React.FC = () => {
    const [isOnline, setIsOnline] = useState<any>(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (

        <div>
            {!isOnline ? (
                <section className={'connection__status'}>
                    <div className={'flex gap-x-4 items-center'}>
                        <FontAwesomeIcon icon={faTriangleExclamation} className={'text-xl sm:text-3xl'} />
                        <p className={'text-xs sm:text-sm'}>Vous êtes hors-ligne.</p>
                    </div>
                </section>
            ) : ''}
        </div>
    );
};

export default ConnectionStatus;