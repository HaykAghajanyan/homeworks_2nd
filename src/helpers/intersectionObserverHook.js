import {useEffect, useState} from "react";


export const useOnScreen = (ref, rootMargin = "0px") => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold: 0.1
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return isIntersecting;
}
