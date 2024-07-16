import React, { useContext } from "react";
import { Data } from "../App";

const Generation = () => {
  const useData = useContext(Data);
  return (
    <div>
      <h1>
        generation File <br />
        and accessing grandParent file or from main file <br />
        {useData}
      </h1>
    </div>
  );
};

export default Generation;
