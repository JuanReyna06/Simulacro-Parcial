import axios from 'axios';

const getPlayers = async () => {
  const url = `http://localhost:3001/api/players`;
  return (axios.get(url)
  .then((response) => {  
    console.log(response)
    const data = response.data;
    return data
  }));
};

const getPlayersbyFilters = async (filtro,orden) => {
    const url = `http://localhost:3001/api/players?filtro=${filtro}&orden=${orden}`;
    return (axios.get(url)
    .then((response) => {  
      const data = response.data;
      return data
    }));
  };

export {getPlayers,getPlayersbyFilters};
