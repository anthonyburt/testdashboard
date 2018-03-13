const baseAPI = '/api';

const statsService = {

  getOverallHistory() {
    return new Promise((resolve, reject) => {
        console.log("get stats");
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
          console.log("get line graph duration");
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
    }

};

export default statsService;
