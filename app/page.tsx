'use client';
export default function Home() {
  const handleDownload = () => {
    console.log(123);
    fetch('http://localhost:3000/export', {
      method: 'GET',
    })
      .then((response) => response.blob()) // Chuyển response thành Blob (file)
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.xlsx'; // Đặt tên file khi tải về
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => console.error('Error downloading file:', error));
  };
  return (
    <div>
      <button onClick={handleDownload}>download</button>
    </div>
  );
}
