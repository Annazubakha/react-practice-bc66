import { formatDistanceToNow } from 'date-fns';

export const formateDateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
