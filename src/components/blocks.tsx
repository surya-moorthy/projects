
interface BlockProps {
    value ?: string | null,
    onClick ?: () => void
}
export default function Block(props:BlockProps) {
    
    return <div onClick={props.onClick} className="block">
            {props.value}
    </div>
}
