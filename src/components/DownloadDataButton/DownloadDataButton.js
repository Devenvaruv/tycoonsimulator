// DownloadDataButton.js
import React from 'react';

const DownloadDataButton = ({ data, filename }) => {
  // Function to handle data download
  const handleDownload = () => {
    // Create a Blob from the data
    let fileData = typeof data === 'object' ? JSON.stringify(data, null, 2) : data;
    const blob = new Blob([fileData], { type: 'text/plain' });
    const href = URL.createObjectURL(blob);

    // Create a temporary link to trigger the download
    const link = document.createElement('a');
    link.href = 'https://cdn.jsdelivr.net/gh/belaviyo/download-with/samples/sample.pdf'
    link.download = 'sample.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean-up the URL object
    URL.revokeObjectURL(href);
  };

  return (
    <button onClick={handleDownload}>
      Download Data
    </button>
  );
};

export default DownloadDataButton;
