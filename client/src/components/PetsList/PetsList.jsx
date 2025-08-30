import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changePetTypeFilter,
  getPetsThunk,
  getTypesThunk,
} from '../../store/slices/petsSlice';

function PetsList({
  pets,
  petTypes,
  filter,
  isFetching,
  error,
  getPets,
  getTypes,
  changePetType,
}) {
  const { petType } = filter;
  useEffect(() => {
    getTypes();
  }, []);

  useEffect(() => {
    getPets(filter);
  }, [petType]);

  return (
    <>
      <section>
        {petTypes.map((t) => (
          <label key={t.id}>
            <input
              checked={petType == t.id}
              type="radio"
              name="petType"
              value={t.id}
              onChange={() => {
                changePetType(t.id);
              }}
            />{' '}
            {t.type}
          </label>
        ))}
      </section>

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
            <p>{petTypes.find((t) => t.id === p.petTypeId).type}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = ({ petsData }) => petsData;
const mapDispatchToProps = (dispatch) => ({
  getPets: (data) => dispatch(getPetsThunk(data)),
  getTypes: () => dispatch(getTypesThunk()),
  changePetType: (data) => dispatch(changePetTypeFilter(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
