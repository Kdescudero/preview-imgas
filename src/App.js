import React, { useState } from "react";

const App = () => {
  const [url, setUrl] = useState("");
  const [fileArray, setFileArray] = useState([]);

  const handleImages = (e) => {
    let reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleMultiImages = (e) => {
    const array_1 = [];
    const array_2 = [];
    array_1.push(e.target.files);
    for (let i = 0; i < array_1[0].length; i++) {
      array_2.push(URL.createObjectURL(array_1[0][i]));
    }
    setFileArray(array_2);
  };

  // const handleMultiImages = (e) => {
  //   if (e.target.files) {
  //     const files = Array.from(e.target.files);
  //     Promise.all(
  //       files.map((file) => {
  //         return new Promise((resolve, reject) => {
  //           const reader = new FileReader();
  //           reader.addEventListener("load", (ev) => {
  //             resolve(ev.target.result);
  //           });
  //           reader.addEventListener("error", reject);
  //           reader.readAsDataURL(file);
  //         });
  //       })
  //     ).then(
  //       (images) => {
  //         setFileArray(images);
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  // };

  return (
    <div>
      <h1>Preview of image</h1>
      <input type="file" onChange={(e) => handleImages(e)} />
      <img alt="..." src={url} style={{ width: "150px", height: "100px" }} />
      <hr />
      <hr />
      <h1>Preview of images</h1>
      <input type="file" multiple onChange={(e) => handleMultiImages(e)} />
      {fileArray.map((url, key) => (
        <img
          key={key}
          src={url}
          alt="..."
          style={{ width: "150px", height: "100px" }}
        />
      ))}
    </div>
  );
};

export default App;
