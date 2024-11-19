type LoginResponse =
| { token: string; error: null }
| { token: null; error: string }
| string;

export const MakeLogin = async (email: string, password:string): Promise<LoginResponse> =>{
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
      console.log(data);
    //   const {setEmailError} = useAuth()
      if (response.ok) {
        return {token: data.token, error: null};
      } else {
        if (data.error === "user not found") {
          return {token: null , error: "Usuario no encontrado"};
        } else if (data.error === "Missing password"){
          return {token:null, error: "Contraseña faltante"};
        } else {
          return "Error desconocido"
        } 
      }
    } catch (error) {
      console.log('Hubo un problema con la solicitud.', error);
      return  "Error de conexión";
    }
  }