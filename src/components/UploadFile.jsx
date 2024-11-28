import { IKContext, IKUpload } from "imagekitio-react";
import React,{useRef} from "react";
import toast from "react-hot-toast";

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/post/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};
export const UploadFile = ({ children, type, setData, setProgress }) => {
  const ref = useRef(null);

  const onError = (err) => {
    // console.log(err);
    toast.error("Image upload failed!");
  };
  const onSuccess = (res) => {
    // console.log(res);
    setData(res);
    toast.success("Image uploaded successfully!");
  };
  const onUploadProgress = (progress) => {
    // console.log(progress);
    setProgress(Math.round((progress.loaded / progress.total) * 100)); 
  };
  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        ref={ref}
        accept={`${type}/*`}
        className="hidden"
      />
      <div onClick={() => ref.current.click()}>{children}</div>
    </IKContext>
  );
};
