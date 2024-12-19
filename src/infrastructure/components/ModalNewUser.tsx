import { FC, useState } from "react"
import { InsertCliente } from "../http/InsertCliente";

interface ModalNewUserProps{
    closeModal: () => void;
    className?: string;
}

export const ModalNewUser: FC<ModalNewUserProps> = ({closeModal, className = ""}) =>{

    const [formData, setFormData] = useState({
        name:"",
        lastname:"",
        email:"",
        nacionality:"",
        password:"",
        repeatpassword:"",
    })
    const [errorPassword, setErrorPassword] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        
        setFormData(prevState => ({
        ...prevState, 
        [name]: value,
        }));
        if(name === "password" || name === "repeatpassword"){
            validatePassword(name, value);
        }
    };

    const validatePassword = (type: string, value: string) =>{
        const {password, repeatpassword}= formData;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(type === "password" && !passwordRegex.test(value)){
            setErrorPassword("La contraseña debe tener al menos 8 caracteres, incluir letras, números y un carácter especial.");
            return
        }
        if (type === "repeatpassword" && value !== password) {
            setErrorPassword("Las contraseñas no coinciden.");
            return;
          }

        if(type ==="password" && repeatpassword && value !== repeatpassword){
            setErrorPassword("Las contraseñasn no coinciden.");
            return;
        }
        setErrorPassword("");

    };
    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault();

        // const user: UserItem = {
        //     email: userData.email,
        //     password: userData.password
        // }

        // setLoading(true);
       try{
            const insertUser = await InsertCliente(
                formData.email,
                formData.password, 
                formData.name, 
                formData.lastname,
                formData.nacionality);
            // await new Promise((resolve) => setTimeout(resolve, 1000));
            // setUserLogin( [...userLogin, user])
            if(insertUser){
                console.log('Usuario registrado exitosamente', insertUser.user);
            }
     
             setFormData({
                name:"",
                lastname:"",
                email:"",
                nacionality:"",
                password:"",
                repeatpassword:"",
             })
             closeModal()

        //  setHasAttempted(false);
        //  validate();
       }catch(error){
        console.error("Error during submission:", error);
       } 
    //    finally{
    //      setLoading(false);
    //    }

    };

    // const handleFocus = () => {
    //     setHasAttempted(false); 
    //   };

    return(
        <div className={`flex fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)] ${className} `}>
            <div className="relative p-4 w-full md:max-w-2xl">
                {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow-lg ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 ">
                 Registrarse
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => closeModal} >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <form  onSubmit={handleSubmit} className="p-4 md:p-5"  >
                <div className="grid gap-4 mb-4 grid-cols-2 ">
                    <div className="sm:col-span-2 md:col-span-1">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                        <input 
                        type="text"
                        name="name"
                        onChange={handleChange}
                        id="name" 
                        value={formData.name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                
                         required />
                    </div>
                    <div className="sm:col-span-2 md:col-span-1">
                        <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 ">Apellido</label>
                        <input 
                        type="text" 
                        name="lastname" 
                        onChange={handleChange}
                        id="lastname" 
                        value={formData.lastname}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 

                        required/>
                    </div>
                    <div className="sm:col-span-2 md:col-span-1">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                        required/>
                    
                    </div>
                    <div className="sm:col-span-2 md:col-span-1">
                        <label htmlFor="nacionality" className="block mb-2 text-sm font-medium text-gray-900 ">Nacionalidad</label>
                        <input 
                        type="text" 
                        name="nacionality" 
                        onChange={handleChange}
                        value={formData.nacionality}
                        id="nacionality" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 

                        required/>
                    </div>
                    <div className="sm:col-span-2 md:col-span-1">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
                        <input 
                        type="password" 
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        id="password" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                        required/>
                         {formData.password !== formData.repeatpassword && (
                        <p style={{ color: "red" }}>{errorPassword}</p>)}
                    </div>
                    <div className="sm:col-span-2 md:col-span-1 mb-4">
                        <label htmlFor="repeatpassword" className="block mb-2 text-sm font-medium text-gray-900 ">Repetir Contraseña</label>
                        <input 
                        type="password" 
                        name="repeatpassword" 
                        id="repeatpassword"
                        onChange={handleChange} 
                        value={formData.repeatpassword}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        required/>
                    </div>
                </div>
                <button
                type="submit"
                className='py-4 px-8 text-md font-medium rounded-full text-center border-none shadow-button-form'
                style={{
                color: "#ffffff",
                background:"#4487FF",
                maxWidth: "200px",
                margin: "auto"
                }}
            >
             REGISTRARSE
          </button>
            </form>
        </div>
    </div>
</div> 
    )
}