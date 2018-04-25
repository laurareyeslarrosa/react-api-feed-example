import {apiUrl, apiUrlSufixList} from './const';

export function getGithubData(parent, statemame, username) {
  let url = apiUrl + username
  getApiConnectionData(parent, statemame, url);
}

export function getGithubRepoData(parent, statemame, username) {
  let url = apiUrl + username + apiUrlSufixList.repo
  getApiConnectionData(parent, statemame, url);
}

function getApiConnectionData(parent, statemame, url, callback) {
  fetch(url)
  .then(response => {
      if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
  })
  .then(data => data.json())
  .then(data => {
      parent.setState({
        [statemame]: data
      })
    
    }, () => {
      parent.setState({
        requestFailed: true
      })
    })
}