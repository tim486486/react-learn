import {useState, useEffect, useRef} from 'react'

const useFetch = (url: string) => 
{
  const [data, setData] = useState<any | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)

  const abortControllerRef = useRef<AbortController | null>(null);
  
  useEffect(() => 
  {
    // If the url changes, create a new AbortController
    if (abortControllerRef.current) {
      console.log('test')
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    abortControllerRef.current = new AbortController();
    
    const fetchData = async () => 
    {
      try 
      {
        const response = await fetch(url, { signal: abortControllerRef.current && abortControllerRef.current.signal });
        if (!response.ok) 
        {
          throw Error('Could not fetch the data for that resource');
        }
        const data = await response.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } 
      catch (err: any) 
      {
        if (err.name === 'AbortError') 
        {
          console.log('fetch aborted');
        } 
        else 
        {
          setIsPending(false);
          setError(err.message);
        }
      }
    };
    setTimeout(fetchData, 0);
    return () => 
    {
      if (abortControllerRef.current)
      {
        console.log('aborting')
        abortControllerRef.current.abort(); 
        abortControllerRef.current = null; // optional, helps with cleanup
      }     
    };
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;