import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideCart} />
}

const Overlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalVariable = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {/* <Overlay />
        <Backdrop /> */}
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalVariable)}
        {ReactDOM.createPortal(<Overlay> {props.children} </Overlay>, portalVariable)}
    </Fragment>
}

export default Modal;