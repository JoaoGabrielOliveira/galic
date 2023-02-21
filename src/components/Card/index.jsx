import Chip from '../chip';
import './index.css';

const Card = (props, {children }) => {
    let style = {
        width: props.width ?? '470px',
        height: props.height ?? '250px',
    }
    return <div className="card" style={style}>
        <header>
            <Chip>
                {props.chipText}
            </Chip>
        </header>

        <main>
            {children}
        </main>

        <footer>
            <div className="footer-item">
                <button className='has-icon'>▶️</button>
            </div>
            

            <div className="footer-item">
                <p className="title">Spiderman - No way home</p>
                <p className="subtitle">Dec 2021</p>
            </div>

            <div className="footer-item">
                <time className=''>02:28:05</time>
            </div>

        </footer>
    </div>
}

export default Card;