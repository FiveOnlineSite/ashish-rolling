import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import AOS from "aos"; // Import AOS (Animate on Scroll) library
import "aos/dist/aos.css"; // Ensure you've imported the AOS CSS

const CollectionSlider = ({ items = [], settings }) => {
  const [selectedVideo, setSelectedVideo] = useState(null); // Track the video for the modal
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1500, // Set the duration for animations
      once: false, // Ensure animations trigger each time the element enters the viewport
    });
  }, []);

  const handleAfterChange = () => {
    AOS.refresh(); // Refresh AOS after a slide change to trigger animations
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (video) => {
    setSelectedVideo(video); // Set the selected video
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedVideo(null); // Clear the selected video
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    if (isModalOpen && selectedVideo && videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = false;
    }
  }, [isModalOpen, selectedVideo]);

  return (
    <>
      <Slider {...settings} afterChange={handleAfterChange}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div className="element" key={index}>
              {item.video ? (
                <div className="video-thumbnail-container">
                  <img
                    className="slider-thumbnail"
                    src={item.image || item.video_thumbnail}
                    alt={`Thumbnail ${index}`}
                  />
                  <div
                    className="play-icon-overlay"
                    onClick={() => openModal(item.video)}
                  >
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                  </div>
                </div>
              ) : (
                <img
                  className="slider-img wow fadeIn"
                  src={item.image || item.productImg}
                  alt={`Slider item ${index}`}
                />
              )}
            </div>
          ))
        ) : (
          <div className="fallback-message">No items available</div>
        )}
      </Slider>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" onClick={closeModal}>
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                {selectedVideo ? (
                  <video
                    controls
                    className="modal-video"
                    onCanPlay={() => {
                      if (videoRef.current) {
                        videoRef.current.play(); // Ensure the video plays when it is ready
                      }
                    }}
                  >
                    <source src={selectedVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <p>No video selected</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionSlider;
