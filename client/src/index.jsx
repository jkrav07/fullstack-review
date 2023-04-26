import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

let initialRender;
$.ajax({
  url: 'http://127.0.0.1:1128/repos',
  headers: { 'custom-header': 'Access-Control-Allow-Origin',
  'Access-Control-Allow-Headers': '*'},
  success: (data) => {
    console.log('ajax get request data:', data)
    initialRender = data;
    ReactDOM.render(<App />, document.getElementById('app'));
  }
});


const App = () => {

  const [repos, setRepos] = useState(initialRender);

  const search = (term) => {
    console.log(`${term} was searched`);
  }
  //console.log('initialRender:', initialRender);

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search} repos={repos} setRepos={setRepos}/>
    </div>
  );
}

