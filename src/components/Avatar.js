import avatar from './Avatar/avatar1.jpeg'
const MostrarAvatar = ({ Imagen, nombre, apellido }) => {

    let cadApellido = apellido
    let firtLetterLastName = cadApellido.charAt(0)
    let cadNombre = nombre
    let firtLetterName = cadNombre.charAt(0)
    let unir = firtLetterName + " " + firtLetterLastName

    const ImagenUrl = Imagen === ''  &&nombre ==='' && apellido==='' ? avatar : Imagen
    const Unir = Imagen === '' ? unir : unir
    console.log(Unir)
    return (
        <div style={{
            backgroundColor: '#8B8B8B',
            width: '270px',
            height: '270px',
            marginTop: '50px',
            marginLeft: '40%',
            borderRadius: '250px',

        }}>

            <div>
                <img src={ImagenUrl} alt='' style={{
                    borderRadius: '50%',
                    width: '250px',
                    height: '250px',
                    marginTop: '10px',
                    marginLeft: '10px',
                    borderRadius: '250px',
                    
                }} />
                <h1 style={{
                     marginTop: '-150px',
                     marginLeft: '20%',
                     color: 'black',
                     fontSize: '600%',
                     
                }}>{Unir}</h1>
            </div>



        </div>
    );



}


export {
    MostrarAvatar,

}