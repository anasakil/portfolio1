import React from 'react';

const DownloadCVButton = () => {
  return (
    <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download="cv.pdf">
      <button>
        Download CV
      </button>
    </a>
  );
};

export default DownloadCVButton;
