const login = {
    element1: {
      description: '1-boton login ',
      botonLogin: '.login',
    },
    element2: {
      description: '2-campo email',
      inputEmail: '#email',
    },
    element3: {
        description: '3-campo password',
        inputPassword: '#passwd',
      },     
    element4: {
        description: '4-Boton completar login',
        botonCompletarLogin: '#SubmitLogin > span',
      }    
      ,     
    element5: {
        description: '5-Boton cerrar sesion',
        botonCerrarSesion: '.logout',
      },     
    element6: {
        description: '6-label con información del nombre de usuario',
        labelUsuario: '.account > span',
    }     
  };
  
module.exports=login