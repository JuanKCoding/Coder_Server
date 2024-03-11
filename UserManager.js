class UserManager {
    static #users = [];
    create(data) {
      const user = {
        id:
          UserManager.#users.length === 0
            ? 1
            : UserManager.#users[UserManager.#users.length - 1].id + 1,
        foto: data.foto,
        email: data.email,
        password: data.password,
        role: 0,
      };
      UserManager.#users.push(user);
      console.log("Usuario Creado");
    }
    read(){
      return UserManager.#users;
    }
  }
  
  const gestorDeUsuarios = new UserManager()
  gestorDeUsuarios.create(
    {
    foto : "random.jpg" ,
    email : "random@gmail.com",
    password : "soyo123"
  }
  )
  gestorDeUsuarios.create({
    foto : "juan.jpg" ,
    email : "juan@gmail.com",
    password : "juan123"
  }
  ) // Crear un nuevo usuario
  
	console.log(gestorDeUsuarios.read())