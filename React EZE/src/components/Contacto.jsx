
import { useForm } from "react-hook-form";
import './Contacto.css'




const Contacto = () => {

 
    const { register, handleSubmit } = useForm();
 
    const enviar = (datos) => {
        console.log(datos);
    }


    return (

        <div>
            <h1 className="main-titulo"> Contacto</h1>
            <form className= "formulario" onSubmit={handleSubmit(enviar)}>
                <input 
                type="text" 
                placeholder="ingresa tu nombre" 
                {...register("nombre")}
                />
                <input 
                type="email" 
                placeholder='ingresa tu email'
             {...register("email")}
                 />
                   <input 
                type="phone" 
                placeholder='ingresa tu teléfono'
                {...register("telefono")}
                 />
                <button type="submit" className="enviar">Enviar</button>
            </form>
            
            
            
            </div>
    )
}


export default Contacto