import {IMAGES} from '../../helpers/constants'
import Loadable from "../Loadable";

const Avatars = () => {
    return (
        <div className='cat-container'>
            {
                IMAGES.map(cat => (
                    <div key={cat} className='cat-item_container'>
                        <Loadable src={cat} alt={'#'} />
                        {/*<img className='cat-item' src={cat} alt="#"/>*/}
                    </div>
                ))
            }
        </div>
    )
}

export default Avatars
