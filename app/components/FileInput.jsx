import React, { useState } from "react";
import uploadImage from "../../public/assets/upload-image.jpg";
import Image from "next/image";

const FileInput = ({ src, setValue }) => {
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
      setValue(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center justify-between px-5">
      <div>
        <Image
          alt="product image"
          src={photo ? photo : src}
          height={200}
          width={200}
          className="h-24 w-24 rounded-full border border-secondary"
        />
      </div>
      <div className="border-2 border-dashed border-secondary rounded-md relative cursor-pointer">
        <Image
          src={uploadImage}
          alt="image upload"
          height={200}
          width={200}
          className="h-20 w-32 rounded-md"
        />
        <input
          type="file"
          name="photo"
          onChange={(e) => handleChange(e)}
          id=""
          required={src ? false : true}
          className="absolute top-0 left-0 h-full w-full opacity-0"
        />
      </div>
    </div>
  );
};

export default FileInput;
