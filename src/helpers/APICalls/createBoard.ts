import { IFetchOptions, IBoardApiData } from '../../interface/';

const createBoard = async (name: string): Promise<IBoardApiData> => {
  const fetchOptions: IFetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ name }),
  };
  return await fetch(
    process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_HEROKU_HOST_URL}dashboard/boards/` : ``,
    fetchOptions,
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createBoard;
