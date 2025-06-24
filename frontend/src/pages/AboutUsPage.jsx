import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TempAboutus from '../components/Templates/TempAboutus';
import NotFound from '../NotFound';
import FrontLoader from '../components/Loader/FrontLoader';

export default function AboutUsPage() {
  const slug = 'about-us';

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchPage = async () => {
      setLoading(true);
      setData(null);
      setNotFound(false);

      try {
        const res = await fetch(`/api/page/getpage/${slug}`, {
          method: 'GET',
          cache: 'force-cache',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const json = await res.json();

        console.log('json', json);

        if (!res.ok || !json?.title) {
          setNotFound(true);
          return;
        }

        setData(json);
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

  return <TempAboutus data={data} />;
}
