
import React from 'react';

const UserData = (props:any) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>Name:{props.name}</h2>
      <p style={styles.info}>Age: {props.age}</p>
      <p style={styles.info}>Location: {props.location}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  name: {
    fontSize: '1.5rem',
    margin: '0 0 10px 0',
  },
  info: {
    margin: '5px 0',
  },
};

export default UserData;
