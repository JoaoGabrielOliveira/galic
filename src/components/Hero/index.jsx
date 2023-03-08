import "./index.css";

const Hero = (props) => {
    /** @type {import("react").CSSProperties} */
    const style = {
        backgroundImage : `url(${props.background})`,
        height: props.height,
        borderRadius: props.noBorder ? "none" : ".5em;"
    };

    return <div className="hero" style={style}>
        {props.children}
    </div>;
}


export default Hero;