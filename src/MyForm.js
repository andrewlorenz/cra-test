import { useState, useRef, useEffect } from 'react';

const MyForm = () => {
  const [ search, setSearch ] = useState({ text: '', year: '', other: '' });
  const [ submitted, setSubmitted ] = useState(false);


  useEffect(() => {
    if (search.length < 3) return;
    if (!submitted) return;
    console.log('useEffect - fetch data');
    async function fetchData() {
      const response = await fetch(`https://findstuff.com?q={search}`);
    }
    fetchData();
  }, [ search.text, search.year ]);

  useEffect(() => {
    if (search.length > 10) {
      console.log('do super duper search');
    };
  }, [ search ]);

  const onType = (evt) => {
    setSearch({ 
      ...search,
      password: evt.target.value,
   });
  }

  setSearch({ ...search, user: evt.target.value });
  return (
    <form>
      Search for:
      <input name="search"  type="text" value={search} onChange={onType}></input>
    </form>
  )
}

export default MyForm;
