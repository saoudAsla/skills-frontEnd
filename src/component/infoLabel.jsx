import React from 'react';

const InfoLabel = props => {
  const { label, content } = props;
  return (
    <div className="row">
      <div className="col-sm-3 col-md-2 col-5">
        <label style={{ fontWeight: "bold" }}>{label}</label>
      </div>
      <div className="col-md-8 col-6" ></div>
      {content}
    </div >
  );
};

export default InfoLabel;
