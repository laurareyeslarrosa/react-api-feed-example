import {apiUrl, apiUrlSufixList} from './const';

//const urlForUsername = username =>
//`//https://api.github.com/users/${username}`

export function getGithubData(parent, statemame, username) {
  let url = apiUrl + username
  getApiConnectionData(parent, statemame, url);
}

export function getGithubRepoData(parent, statemame, username) {
  let url = apiUrl + username + apiUrlSufixList.repo
  getApiConnectionData(parent, statemame, url);
}

function getApiConnectionData(parent, statemame, url) {
  fetch(url)
  .then(response => {
      if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
  })
  .then(data => data.json())
  .then(data => {
      console.log(data);
      parent.setState({
        [statemame]: data
      })
    }, () => {
      parent.setState({
        requestFailed: true
      })
    })
}

/*
export function getGithubData(parent, username) {
    fetch(apiUrl + username)
    .then(response => {
        if (!response.ok) {
            throw Error("Network request failed")
          }
          return response
    })
    .then(data => data.json())
    .then(data => {
        console.log(data);
        parent.setState({
          githubData: data
        })
      }, () => {
        parent.setState({
          requestFailed: true
        })
      })
}
*/