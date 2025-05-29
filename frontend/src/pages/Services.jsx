import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import TempServices from '../components/Templates/TempServices';

export default function Services() {
  const { slug } = useParams();

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({});

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!slug) return;

    const fetchPage = async () => {
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
          toast.error(json.message || 'Failed to fetch page data');
          return;
        }

        setData(json && json);
        setTitle(json?.title);

        const newSections = {};
        for (const section of json?.content || []) {
          newSections[section.type] = section.data || [];
        }
      } catch (error) {
        toast.error(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  return <TempServices data={data} title={title} />;
}
