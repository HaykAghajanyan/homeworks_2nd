import {IMAGES} from "../../helpers/constants";
import LoadableImg from "../LoadableImg";

const Cats = () => {
    return (
        <div className='cat-container'>
            {
                IMAGES.map(cat => (
                    <div key={cat} className='cat-item'>
                        <LoadableImg src={cat} alt={'#'} />
                    </div>
                ))
            }
        </div>
    )
}

export default Cats
