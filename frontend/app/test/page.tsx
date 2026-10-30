async function getData() {
  const res = await fetch('http://127.0.0.1:8000/api/test');
  const data = await res.json();
  return data;
}

export default async function TestPage() {
  const data = await getData();

  return (
    <div>
      <h1>Hasil dari Laravel:</h1>
      <p>{data.message}</p>
    </div>
  );
}