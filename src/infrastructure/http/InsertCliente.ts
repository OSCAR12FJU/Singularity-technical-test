
export const InsertCliente = async (email: string, password:string, name:string, lastname:string,nacionality:string) : Promise <{ message: string; user: { id: number; name: string; lastname: string; email: string; nacionality: string; password: string } }> =>{
    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            lastname,
            email,
            nacionality,
            password
        }),
      });
      if (!response.ok){
       throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();

        return data;
      }catch(error){
        console.error('Error al insertar cliente:', error);
        throw error;
      }

    //   if (response.ok) {
    //     return {token: data.token, error: null};
    //   } else {
    //     if (data.error === "user not found") {
    //       return {token: null , error: "Usuario no encontrado"};
    //     } else if (data.error === "Missing password"){
    //       return {token:null, error: "Contraseña faltante"};
    //     } else {
    //       return "Error desconocido"
    //     } 
    //   }
    // }catch(error) {
    //   console.log('Hubo un problema con la solicitud.', error);
    //   return  "Error de conexión";
    // };
};