import React from "react";

import { IKImage } from "imagekitio-react";

const Image = ({ src, h, w, className }) => {
  return (
    <IKImage
      urlEndpoint={"https://ik.imagekit.io/pinterest/"}
      path={src}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      className={className}
    />
  );
};

export default Image;
