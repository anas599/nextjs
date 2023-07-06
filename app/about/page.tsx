import client from '../../lib/db';

client
  .connect()
  .then(() => {
    console.log('Connected to the database2');
  })
  .catch((err: any) => {
    console.error('Error connecting to the database:', err);
  });
let arr;
client
  .query('SELECT * FROM name')
  .then((res: any) => {
    arr = res.rows;
  })
  .catch((err: any) => {
    console.error('Error querying the database:', err);
  });
export default function newele() {
  let arr: never[] = [];

  client
    .query('SELECT * FROM name')
    .then((res: { rows: never[] }) => {
      arr = res.rows;
    })
    .catch((err: any) => {
      console.error('Error querying the database:', err);
    });
  console.log(arr);
}
