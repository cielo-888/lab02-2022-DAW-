const data = [
    {
      id: 1,
      name: "Pepe",
      last_name: "Perez",
    },
  ];
  
  // Listar
  export const findAll = () => {
    return data;
  };
  
  // Buscar 
  export const findOne = (id) => {
    return data.find((u) => u.id === Number(id));
  };
  
  // Crear
  export const store = (user) => {
    user.id = data.length + 1;
    data.push(user);
  };
  
  // Actualizar
  export const update = (id, user) => {
    const index = data.findIndex((u) => u.id === Number(id));
  
    data[index] = {
      ...data[index],
      ...user,
    };
  };
  
  export const remove = (id) => {
    const users = data.filter((u) => u.id !== Number(id));
    data.length = 0;
    data.push(...users);
  };
  