import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TempIndustries from '../components/Templates/TempIndustries';
import FrontLoader from '../components/Loader/FrontLoader';
import NotFound from '../NotFound';

export default function Industries() {
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
        setLoading(true);
        const res = await fetch(`/api/page/getpage/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const json = await res.json();

        if (!res.ok) {
          setNotFound(true);
          return;
        }

        setData(json && json);
        setTitle(json?.title);

        const newSections = {};
        for (const section of json?.content || []) {
          newSections[section.type] = section.data || [];
        }
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

  return <TempIndustries data={data} title={title} />;
}
