import './Footer.css'

export const Footer = ({ onDeleteAll }) => {
    return (
        <div className="footer">
            <button 
            className="reset-button"
            onClick={onDeleteAll}>
                Borrar todas las tareas</button>
        </div>
    )
}