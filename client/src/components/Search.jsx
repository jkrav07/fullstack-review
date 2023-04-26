import React, { useState } from 'react';

const Search = ({ onSearch, repos, setRepos }) => {

  const[term, setTerm] = useState('')

  const onChange = (e) => {
    setTerm(e.target.value);
  }

  const search = () => {
    onSearch(term); //console.log
    //
    $.post('http://127.0.0.1:1128/repos', {username: term})
    .then(function(response) {
      $.ajax({
        url: 'http://127.0.0.1:1128/repos',
        headers: { 'custom-header': 'Access-Control-Allow-Origin',
        'Access-Control-Allow-Headers': '*'},
        success: (data) => {
          setRepos(data);
        }
      });
    })
  }

  return (
    <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={term} onChange={onChange}/>
      <button onClick={search}> Add Repos </button>
    </div>
  );
}

export default Search;