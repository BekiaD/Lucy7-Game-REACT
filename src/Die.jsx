import './Die.css'

export default function Die({ val , color = 'slateblue'}) {
    return <div className="Die" stye={{backgroundColor: color}}>{val}</div>
}