
const baseUrl = 'https://www.swapi.tech/api';

const people = {
  getById: async (id) => {
    // Buscar un personaje por el id y retornar el objeto con los datos
    try {
      const resp = await fetch(`${baseUrl}${id}`);
      if (resp.ok) return await resp.json();
      console.error(resp.status, resp.statusText);
      return [];
    } catch (error) {
      console.error("Error en la api", error);
      return [];
    }
  },

  getList: async () => {
    // Ejemplo de peticion https://www.swapi.tech/api/people
    try {
      const resp = await fetch(`${baseUrl}/people`);
      if (resp.ok) return await resp.json();
      console.error(resp.status, resp.statusText);
      return [];
    } catch (error) {
      console.error("Error en la api", error);
      return [];
    }
  },

  getListByLimit: async (page = 1, limit = 10) => {
    // Ejemplo de peticion https://www.swapi.tech/api/people?limit=20&page=2
    try {
      const resp = await fetch(`${baseUrl}?limit=${limit}&page=${page}`);
      if (resp.ok) return await resp.json();
      console.error(resp.status, resp.statusText);
      return [];
    } catch (error) {
      console.error("Error en la api", error);
      return [];
    }
  },
};


const planets1 = {
  getListPlanets: async () => {
    try {
      const resp = await fetch(`${baseUrl}/planets`);
      if (resp.ok) return await resp.json();
      console.error(resp.status, resp.statusText);
      return [];
    } catch (error) {
      console.error("Error en la api", error);
      return [];
    }
  }
};

const vehicle = {
  getListVehicles: async () => {
  try {
    const resp = await fetch(`${baseUrl}/vehicles`);
    if (resp.ok) return await resp.json();
    console.error(resp.status, resp.statusText);
    return []
  }
  catch (error) {
    console.error("Error en la API", error);
    return []
  }
  }
}

export { people, planets1, vehicle };
