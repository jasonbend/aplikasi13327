import React from "react";
import PropTypes from "prop-types";

function StudentInfo({ name, nim }) {
  return (
    <div className="container text-center mt-5">
      <p className="display-4">Nama: {name}</p>
      <p className="display-5">NIM: {nim}</p>
    </div>
  );
}

StudentInfo.propTypes = {
  name: PropTypes.string.isRequired,
  nim: PropTypes.string.isRequired,
};

export default StudentInfo;
