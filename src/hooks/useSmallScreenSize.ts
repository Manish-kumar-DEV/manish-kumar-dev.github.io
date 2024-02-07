import { useCallback, useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts';

const useSmallScreenSize = () => {
    const smallScreenSize = useMediaQuery("(max-width: 425px)");
    const [smallScreenCheck, setSmallScreenCheck] = useState(false)

    const updateSmallScreenCheck = useCallback((boolValue: boolean) => {
        setSmallScreenCheck(boolValue);
    }, []);

    useEffect(() => {
        updateSmallScreenCheck(smallScreenSize);
    }, [smallScreenSize, updateSmallScreenCheck])
    return smallScreenCheck
}

export default useSmallScreenSize