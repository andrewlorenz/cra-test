import { useState, useEffect } from 'react';


const CaptureName = () => {
  
  const onSubmit = (firstname, surname) => {
    console.log('submit form!', firstname, surname);
    // we have our firstname and surname variables here to do with as we wish
  }
  return (
    <NameForm onSubmit={onSubmit} />
    )
  }
  
  const NameForm = ({ onSubmit }) => {
    const [ counter, setCounter ] = useState(0);
    const [ firstname, setFirstname ] = useState('empty');
    const [ surname, setSurname ] = useState('');
    const onTypeFirstname = (evt) => setFirstname(evt.target.value);
    const onTypeSurname = (evt) => setSurname(evt.target.value);
    const onSubmitForm = (evt) => {
      evt.preventDefault();
      onSubmit(firstname, surname);
    }

    
    const doSomething = (player) => () => {
      setCounter(counter + 1);
      console.log({ counter });
    }

    return (
      <form>
      <div>
        first name: <input type="text" value={firstname} onChange={onTypeFirstname} />
      </div>
      <div>
        surname: <input type="text" value={surname} onChange={onTypeSurname} />
      </div>
      <div>
        <p onClick={doSomething()}>click</p>
      </div>
      <div>
        <button type="submit" onClick={onSubmitForm}>Submit</button>
      </div>
    </form>
    )
}

export default CaptureName;
