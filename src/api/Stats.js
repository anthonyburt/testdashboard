const baseAPI = '/api';

const statsService = {

  getOverallHistory() {
    return new Promise((resolve, reject) => {
        fetch(`${baseAPI}/stats/quicklook`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
            reject(err);
        });
    });
  },

  getQuickLookLineGraphTestDuration() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/stats/linegraphduration`, {
          headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => {
          reject(err);
      });
    });
    },

  getLastSyncTime() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/stats/lastsync`, {
          headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => {
          reject(err);
      });
    });
    }
}

export default statsService;
