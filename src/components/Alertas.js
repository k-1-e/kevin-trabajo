const MostrarAlerta = ({altura, ancho, colorFondo, texto}) => {
    return(
        <div>
            <div style={{
                height : altura,
                width: ancho,
                background:colorFondo
            }}>
               {texto}
            </div>
            <div>
             <br />
            </div>
        </div>
    )
}
export{
    MostrarAlerta
}