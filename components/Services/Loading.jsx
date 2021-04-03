import ServiceStyle from './Style/ServicesStyle';

const Loading = () => {
  return (
    <div>
      <ServiceStyle />
      <div className="background-loading">
        <div className="loading-center-full-screen">
          <div style={{ textAlign: 'center' }}>
            <img
              src="/static/images/logo.png"
              alt="logo"
              width={250}
            />
          </div>
        </div>
        <div
          style={{
            position: 'fixed',
            right: 30,
            bottom: 30
          }}
        >
          <i className="ti-more-alt"></i>
        </div>
      </div>
    </div>
  );
}

export default Loading;