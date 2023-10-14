import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <Dna
        visible={true}
        height="180"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{
          marginTop: "7rem",
          marginLeft: "-5rem",
        }}
        wrapperClass="dna-wrapper"
      />
    </Html>
  );
};

export default Loader;
