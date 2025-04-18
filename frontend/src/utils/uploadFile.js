export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }

    const data = await res.json();
    return data.filePath; // e.g., '/assets/img/upload/filename.jpg'
  } catch (err) {
    throw new Error(`File upload failed: ${err.message}`);
  }
};
