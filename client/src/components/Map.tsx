const Map = () => {
  return (
    <div className="h-full mx-auto py-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d310.9191818294759!2d29.30858253802569!3d-1.6942915926406843!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1728817321543!5m2!1sen!2srw"
        width="600"
        height="450"
        style={{ border: 0, width: "1000px, margin: auto" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
