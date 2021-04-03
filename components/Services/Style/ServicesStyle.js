const ServiceStyle = () => {
  return (
    <style>
      {`
            .loading-center-full-screen {
              margin: 0;
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: #ffffff;
              zIndex: 100
            }
            .background-loading {
              position:fixed;
              top:0;
              left:0;
              background-color:#eff1f5;
              width:100%;
              height:100%;
              zIndex: 100
              filter: alpha(opacity=65);
            }
          `}
    </style>
  );
}

export default ServiceStyle;