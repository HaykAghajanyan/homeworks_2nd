import cn from 'classnames'
import {useEffect, useRef, useState} from "react";
import {useOnScreen} from "../../helpers/intersectionObserverHook";

const Loadable = ({src, alt, onLoad = () => {}}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const containerRef = useRef(null)
    const imageRef = useRef(null)

    const isVisible = useOnScreen(containerRef)

    useEffect(() => {
        if (!isVisible || isLoaded) return
        if (imageRef.current) {
            imageRef.current.onload = () => {
                setIsLoaded(true)
                onLoad()
            }
        }
    }, [isVisible, onLoad, isLoaded])

    return (
        <div ref={containerRef} className={cn('l_container', {
            'l_container_loaded': isLoaded
        })}>
            {
                (isVisible || isLoaded) && (
                    <img ref={imageRef} className={cn('l_image', {
                        'l_image_loaded': isLoaded
                    })} src={src} alt={alt}/>
                )
            }
        </div>
    )
}

export default Loadable
