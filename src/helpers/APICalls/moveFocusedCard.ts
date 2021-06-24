import { IFetchOptions, IBoardApiData } from '../../interface';

const moveFocusedCard = async (boardId: string, newColumnId: string, cardId: string): Promise<IBoardApiData> => {
  const fetchOptions: IFetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ newColumnId }),
  };
  return await fetch(
    process.env.NODE_ENV === 'production'
      ? `${process.env.REACT_APP_HEROKU_HOST_URL}${boardId}/columns/${newColumnId}/cards/${cardId}/moveCard`
      : `${boardId}/columns/${newColumnId}/cards/${cardId}/moveCard`,
    fetchOptions,
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default moveFocusedCard;
