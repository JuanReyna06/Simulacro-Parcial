import React from 'react';

const ListadoPlayers = ({ lista }) => {
 


  return (
    <div className="container mt-3">
      <h3>Jugadores</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Número</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Apodo</th>
            <th>Edad</th>
            <th>Dirección IP</th>
          </tr>
        </thead>
        <tbody>
        {lista.map((jugador) => (
            <tr key={jugador.id}>
              <td><img src={jugador.avatar} alt="Avatar" /></td>
              <td>{jugador.id}</td>
              <td>{jugador.full_name}</td>
              <td>{jugador.email}</td>
              <td>{jugador.nickname}</td>
              <td>{jugador.age}</td>
              <td>{jugador.ip_address}</td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPlayers;
