import React from 'react';

const RepoList = ({ repos }) => {
  console.log(repos);
  return <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <div>
    {repos.map(repo => {
      return <Repo repo={repo} />
    })}
    </div>

  </div>
}

function Repo({repo}) {
  return (
    <div>
      <a href={repo.url}>{repo.name}</a>
    </div>
  )
}

export default RepoList;