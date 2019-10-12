import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PetPage.module.css';

class PetPage extends Component {
  state = {
    pet: {},
  };

  componentDidMount() {
    const { match, pets } = this.props;
    const { id } = match.params;
    const findPet = pets.find(pet => pet.id === id);
    this.setState({
      pet: findPet,
    });
  }

  handleBack = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return (
      <div className="mainstyle">
        <div className={styles.petAbout}>
          <button
            className={styles.backButton}
            type="button"
            onClick={this.handleBack}
          >
            <i className="material-icons">arrow_back_ios</i>
            Return
          </button>
          <h3 className={styles.title}>All about {pet.name}</h3>
          <div className={styles.petCard}>
            <img
              className={styles.petCard__img}
              src={pet.image}
              alt={pet.breed}
            />
            <div className={styles.petCard__text}>
              <p>
                <b>Age:</b> {pet.age}
              </p>
              <p>
                <b>Gender:</b> {pet.gender}
              </p>
              <p>
                <b>Color:</b> {pet.color}
              </p>
              <p>
                <b>Breed:</b> {pet.breed}
              </p>
            </div>
          </div>
          <p>{pet.description}</p>
        </div>
      </div>
    );
  }
}

PetPage.propTypes = {
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
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default PetPage;
