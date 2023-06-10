
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getPlayers, getPlayersbyFilters } from '../Services/getPlayers';
import ListadoPlayers from './ListadoPlayers';

const Players = () => {
  const [lista, setLista] = useState([]);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = () => {
    getPlayers().then((data) => {
      setLista(data);
    });
  };

  const onSubmit = (data) => {
    const { filtro, orden } = data;
    console.log(filtro,orden)
    if (filtro) {
      getPlayersbyFilters(filtro, orden).then((data) => {
        setLista(data);
      });
    } else {
      fetchPlayers();
    }
  };

  const filtrarJugadores = (event) => {
    const filtro = event.target.value;
    setValue('filtro', filtro); // Actualiza el valor del formulario
  };

  return (
    <div className="container">
      <h1>Formulario de Búsqueda</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Filtro:</label>
              <input type="text" className="form-control" onChange={filtrarJugadores} />
            </div>
            <div className="mb-3">
              <label className="form-label">Orden:</label>
              <select className="form-select" {...register('orden')}>
                <option value="full_name">Nombre</option>
                <option value="nickname">Apodo</option>
                <option value="id">Número</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
      <ListadoPlayers lista={lista} />
    </div>
  );
};

export default Players;
