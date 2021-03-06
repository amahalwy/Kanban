import { IFetchOptions, IBoardsApiData } from '../../interface/';

const getUserBoards = async (): Promise<IBoardsApiData> => {
  const fetchOptions: IFetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(
    process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_HEROKU_HOST_URL}users/board` : `/users/board`,
    fetchOptions,
  )
    .then((res) => res.json())
    .catch((err) => ({
      error: { error: err, message: 'Unable to connect to server. Please try again' },
    }));
};

export default getUserBoards;
