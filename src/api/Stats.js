const baseAPI = '/api';

const statsService = {

  get() {
    return new Promise((resolve, reject) => {
        console.log("get stats");
        fetch(`${baseAPI}/stats`, {
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
