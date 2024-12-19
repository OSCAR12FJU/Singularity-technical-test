import React, { FC, useState } from 'react';
import '../../App.css'
// import { Loading } from './Loading';
import { useAuth } from './SectionContext';
import { MakeLogin } from '../http/LoginCliente';
import { useNavigate } from 'react-router-dom';

interface FormLoginProps {
  closeModal: () => void;
}
export const FormLogin: FC<FormLoginProps> = ({closeModal}) =>{
    interface UserItem{
        email: string;
        password: string;
    }

    // const handleCloseModal = () => {

    //   setIsModalOpen((prev) => !prev)
    // };

    const {setLoading, emailError ,setEmailError, setToken} = useAuth()
        
    const [hasAttempted, setHasAttempted] = useState(false);
    const [userData, setuserData] = useState({
      email: '',
      password: '',  
    });
    const [userLogin, setUserLogin] = useState<UserItem[]>([]);
    const navigate = useNavigate()

    
    const validate = async() =>{

      const makeLogin = await MakeLogin(userData.email, userData.password);
      if (typeof makeLogin === "string"){
        setHasAttempted(true);
        setEmailError(makeLogin);
        return;
      }
      if(makeLogin.error){
        setHasAttempted(true);
        setEmailError(makeLogin.error);
        return;
      }
      setEmailError(" ");
      setToken(makeLogin.token);
      navigate("/inicio");
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setuserData(prevState => ({
        ...prevState, 
        [name]: value,
        }));
    };

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault();

        const user: UserItem = {
            email: userData.email,
            password: userData.password
        }

        setLoading(true);
    
       try{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUserLogin( [...userLogin, user])
 
         setuserData({
             email: '',
             password: '',
         })
         setHasAttempted(false);
         validate();
       }catch(error){
        console.error("Error during submission:", error);
       } finally{
         setLoading(false);
       }

    };

    const handleFocus = () => {
        setHasAttempted(false); 
      };

    return(
    <div className='max-w-5xl md:w-2/3 px-4 py-5 mb-3 bg-white rounded-2xl shadow-lg md:shadow-none'>
    <h2 className='text-xl font-bold text-[#1f2937] pl-4  border-l-8 border-[#FC6048]'>BIENVENIDO</h2>
    <form 
    onSubmit={handleSubmit}
    className ="mt-8 gap-7 flex flex-col jsutify-center no-outline ">
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              className={`p-2.5 w-full text-md font-normal no-outline shadow-input ${hasAttempted && emailError.length > 0 ? 'bg-red-50 border border-red-500 placeholder-red-700 text-red-700' : 'border-none text-gray-600'}`}
              placeholder="EMAIL"
              required
            />

            {hasAttempted && emailError.length > 0 && (
            <p className="mt-2 text-sm text-red-600">
              <span className="font-medium">Oops!</span> {emailError}
            </p>
          )}

          </div>
          <div className="flex flex-col">
            <input
              type="password"
              name="password"
              id="password"
              value={userData.password}
              onFocus={handleFocus}
              onChange={handleChange}
              className={`p-2.5 w-full text-md font-normal no-outline shadow-input border-none text-gray-600`}
              placeholder="CONTRASEÑA"
              required
            />

          {/* {hasAttempted && passwordError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> {passwordError}
            </p>
          )} */}
          </div>
            <div className="text-sm flex justify-end">
             <a href="#" className="text- font-sm text-decoration-none text-gray-400">¿Olvidaste tu contraseña? </a>
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
            INICIAR SESIÓN
          </button>
          <div 
            className="text-sm font-medium text-center text-gray-400">
             AÚN NO TENES CUENTA <a className="text-blue-600 cursor-pointer" onClick={closeModal}>REGISTRARSE</a>
          </div>
        </form>

    {/* {loading && (
        <Loading />
    )} */}

    </div>
    )
}