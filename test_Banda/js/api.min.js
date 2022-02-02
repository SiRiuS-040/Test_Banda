const URL_USER_DATA_GET = 'https://random-data-api.com/api/users/random_user';
const URL_BEER_DATA_GET = 'https://random-data-api.com/api/beer/random_beer';



const getUserData = (onSuccess, onError) => () => {
    return fetch(
        URL_USER_DATA_GET,
        {
            method: 'GET',
            credentials: 'same-origin',
        },
    )
        .then((response) => {
            if (response.ok) {
                return response.json();
            }

            throw new Error(`${response.status} ${response.statusText}`);
        })
        .then((data) => {
            onSuccess(data);
        })
        .catch((err) => {
            onError(err);
        });
};

const getBeerData = (onSuccess, onError) => () => {
    return fetch(
        URL_BEER_DATA_GET,
        {
            method: 'GET',
            credentials: 'same-origin',
        },
    )
        .then((response) => {
            if (response.ok) {
                return response.json();
            }

            throw new Error(`${response.status} ${response.statusText}`);
        })
        .then((data) => {
            onSuccess(data);
        })
        .catch((err) => {
            onError(err);
        });
};

export { getUserData, getBeerData };
