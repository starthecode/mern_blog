export const handlePageDelete = async ({ postid, navigate, toast }) => {
  console.log('test2', postid);

  const confirmDelete = window.confirm(
    'Are you sure you want to delete this page? This action cannot be undone.'
  );
  if (!confirmDelete) return;

  try {
    const res = await fetch(`/api/page/delete/${postid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message);
      return;
    }

    if (data.success) {
      toast.success('Page Deleted');
      navigate(`/dashboard/pages`);
      window.location.reload();
    }
  } catch (error) {
    toast.error(error.message);
  }
};
