import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PetsPage.module.css';

const PetsPage = ({ pets, match }) => {
  return (
    <div className="mainstyle">
      <ul className={styles.petsList}>
        {pets.map(pet => (
          <li key={pet.id} className={styles.petCard}>
            <Link className={styles.petLink} to={`${match.path}/${pet.id}`}>
              <img src={pet.image} alt={pet.breed} />
              <p className={styles.petName}>{pet.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

PetsPage.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      breed: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
export default PetsPage;
