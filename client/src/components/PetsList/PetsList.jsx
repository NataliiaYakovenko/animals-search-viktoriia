import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPetsThunk, getTypesThunk } from '../../store/slices/petsSlice';

function PetsList({ pets, petTypes, isFetching, error, getPets, getTypes }) {
  useEffect(() => {
    getPets();
    getTypes();
  }, []);

  return (
    <ul>
      {pets.map((p) => (
        <li key={p.id}>
          <p>
            {p.owner},{p.description}
          </p>
          <p>
            {p.name}, {p.ownerContacts}, {p.city}
          </p>
          <p>{p.lostDate}</p>
          <p>{p.petTypeId}</p>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ petsData }) =>  petsData;
const mapDispatchToProps = (dispatch) => ({
  getPets: () => dispatch(getPetsThunk()),
  getTypes: () => dispatch(getTypesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
