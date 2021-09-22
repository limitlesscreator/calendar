export const Button = (props) => {
    return (
        <button onClick={() => {props.onClick()}} onKeyDown={event => {
            if (event.key === ' ') {
                props.onClick()
            }
        }}>{props.text}</button>
    )
}