import { useEffect, useState } from 'react';
import TableComp from '../../components/DashComponents/Table';
import toast from 'react-hot-toast';

export const Newsletters = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/newsletters/getNewsletters', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await res.json();

        if (!res.ok) {
          toast.error(data.message || 'Failed to fetch pages');
        } else {
          setNewsletters(data.posts || []);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading...</div>
      ) : (
        <TableComp type="solution" data={newsletters} />
      )}
    </div>
  );
};
