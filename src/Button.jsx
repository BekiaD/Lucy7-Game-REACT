import './Button.css'

export default function Button({ clickFunc, label='Click me' }) {
    return <button className='Button' onClick={clickFunc}>
        {label}
        </button>
}