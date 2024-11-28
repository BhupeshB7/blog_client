import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => {
    const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;
    
    // Return null if src or urlEndpoint is invalid
    if (!src || !urlEndpoint) {
      return null;
    }
  
    return ( 
        <IKImage
          urlEndpoint={urlEndpoint}
          path={src}
          loading="lazy"
          className={className}
          width={w}
          height={h}
          alt={alt}
          lqip={{ active: true, quality: 20 }}
          transformation={[{ height: h, width: w }]}
          /> 
    );
  };
export default Image;  