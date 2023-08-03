import { format } from 'date-fns';

async function formatDate(date: string) {
  const date1 = new Date(date);
  return format(new Date(date), 'yyyy-MM-dd HH:mm:ss');
}
export default formatDate;
