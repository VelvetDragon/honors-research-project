// src/components/VideoEmbed.js
import styles from '@/styles/VideoEmbed.module.css';

const VideoEmbed = ({ videoId }) => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
