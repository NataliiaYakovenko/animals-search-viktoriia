import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';

const CITIES = ['Kyiv', 'Dnipro', 'New York'];

//TODO_VALIDATE_SCHEMA

function PetsForm({ petsType }) {
  const initialValues = {
    name: '',
    owner: '',
    ownerContacts: '',
    description: '',
    city: CITIES[0],
    lostDate: '',
    petTypeId: petsType[0]?.id ?? '',
  };

  const handelSubmit = (values, formikBag) => {
    console.log('values', values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handelSubmit}>
      {(formProps) => (
        <Form>
          <label>
            Pet's name:
            <Field name="name" type="text" placeholder="Pet's name" autoFocus />
          </label>
          <br />
          <label>
            Your name:
            <Field name="owner" type="text" placeholder="Owner's name" />
          </label>
          <br />
          <label>
            Your contacts:
            <Field
              name="ownerContacts"
              type="text"
              placeholder="+380 XX XXX XX XX"
            />
          </label>
          <br />
          <label>
            Discribe your pet:
            <Field name="description" type="text" placeholder="Discribe pet" />
          </label>
          <br />

          <label>City: </label>
          <select
            name="city"
            value={formProps.values.city}
            onChange={formProps.handleChange}
          >
            {CITIES.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>

          <br />
          <label>
            Date of loss of the pet:
            <Field name="lostDate" type="date" />
          </label>
          <br />

          {petsType.length !== 0 && (
            <>
              <label>Pet's type:</label>
              <select
                name="petTypeId"
                value={formProps.values.petTypeId}
                onChange={formProps.handleChange}
              >
                {petsType.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.type}
                  </option>
                ))}
              </select>
            </>
          )}

          <br />
          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  );
}
//{petsData} =({petsTypeId}  - береться з дефтулзів
const mapStateToProps = ({ petsData: { petsType } }) => ({ petsType });
//const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(PetsForm);
