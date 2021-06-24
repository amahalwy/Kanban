import { IFetchOptions, IBoardApiData } from '../../interface';

const createCard = async (title: string, tag: string, columnId: string, boardId: string): Promise<IBoardApiData> => {
  const fetchOptions: IFetchOptions = {
    method: 'POST',
    body: JSON.stringify({ title, tag }),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(
    process.env.NODE_ENV === 'production'
      ? `${process.env.REACT_APP_HEROKU_HOST_URL}${boardId}/columns/${columnId}/cards/`
      : `${boardId}/columns/${columnId}/cards/`,
    fetchOptions,
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createCard;
