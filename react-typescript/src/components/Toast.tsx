type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastPropsType = {
    position:
        Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
        | 'center'
}

export const Toast = ({position}: ToastPropsType) => {
    return <div>Toast Notification Position - {position}</div>
}
