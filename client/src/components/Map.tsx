const Map = () => {
  return (
    <div className="h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.0186874798378!2d29.306993623832597!3d-1.693934580335615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd05a06f176eb7%3A0xeb7e2098856d1f1b!2sPlanete%20Hotel!5e0!3m2!1sen!2srw!4v1728815739941!5m2!1sen!2srw"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
