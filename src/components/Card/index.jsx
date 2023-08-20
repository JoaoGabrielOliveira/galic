import Chip from 'components/chip';
import './index.css';

const Card = (props, {children }) => {
    let style = {
        backgroundImage: `url(${props.background})`,
        width: props.width ?? '470px',
        height: props.height ?? '250px',
    }
    console.log(style);
    return <div className="card" style={style}>
        <header>
            {props.chipText ? <Chip> {props.chipText} </Chip> : ''}
        </header>

        <main>
            {children}
        </main>

        <footer>
            <div className="footer-item">
                <button className='has-icon'>▶️</button>
            </div>
            

            <div className="footer-item">
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.subtitle}</p>
            </div>

            <div className="footer-item">
                <time>{props.time}</time>
            </div>

        </footer>
    </div>
}

export default Card;