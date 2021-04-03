const Club = () => {
  return (
    <section 
      className="section text-white" 
      style={{backgroundImage: "url(/static/images/team.jpg)", marginTop: '50px'}}
      data-overlay="5"
    >
      <div className="container" style={{textAlign: "center", marginTop:"-2.6rem", }}>        
        <h2>Que tal fazer a sua pizza?</h2>
        
        <h5><i className="fa fa-check" aria-hidden="true"></i> Você escolhe a massa e o tamanho que desejar.</h5>
        <h5><i className="fa fa-check" aria-hidden="true"></i> Escolhe os entre os melhores ingredientes disponíveis.</h5>
        <h5><i className="fa fa-check" aria-hidden="true"></i> Acumulando 1000 pontos, troque por Coca-Cola 2L.</h5>
        <p><a className="btn btn-lg btn-outline-dark" style={{ backgroundColor:"#A43D51"}} href="/"><strong style={{fontSize: 25, backgroudColor:"#A43D51"}}>Montar pizza</strong></a></p>
      </div>
    </section>
  );
};

export default Club;