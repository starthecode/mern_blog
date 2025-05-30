import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import TempServices from '../components/Templates/TempServices';
import NotFound from '../NotFound';
import FrontLoader from '../components/Loader/FrontLoader';

export default function Services() {
  const { slug } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchPage = async () => {
      setLoading(true);
      setData(null);
      setTitle('');
      setNotFound(false);

      try {
        const res = await fetch(`/api/page/getpage/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const json = await res.json();

        if (!res.ok || !json?.title) {
          setNotFound(true);
          return;
        }

        setData(json);
        setTitle(json.title);
      } catch (error) {
        console.error(error.message || 'Something went wrong');
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  if (loading)
    return (
      <div className="text-center py-10">
        <FrontLoader />
      </div>
    );

  if (notFound) return <NotFound />;

  return <TempServices data={data} title={title} />;
}
