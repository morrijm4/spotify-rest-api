export async function fetchData(playlistId, setItems, setLoading, setIsSearch) {
  const URL = `http://108.79.233.171:4000/playlist/${playlistId}/`;
  try {
    const res = await fetch(URL, { method: 'get' });
    const data = await res.json();

    setItems(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
    setIsSearch(false);
  }
}
