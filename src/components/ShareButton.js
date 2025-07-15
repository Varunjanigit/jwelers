import React from "react";

const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert(`Share this link: ${window.location.href}`);
    }
  };

  return (
    <div className="Share-Btn">
      <button
        onClick={handleShare}
        className="ShareButton d-flex justify-content-center align-items-center border-0 fs-5 py-2 px-3 rounded-1 shadow-lg position-relative overflow-hidden"
      >
        <i className="bi bi-share"></i>
      </button>
    </div>
  );
};

export default ShareButton;
