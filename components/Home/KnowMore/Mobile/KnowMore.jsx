const KnowMoreMobile = () => {
  let knowMoreArray=[
    {title:'Quem somos',image:'url(/static/images/quem_somos.png)', description:'Conheça um pouco sobre nós e nossa forma de agir.', button:'/quem-somos'},
    {title:'Compra Colaborativa',image:'url(/static/images/indique.png)', description:'Ganhe dinheiro indicando amigos e familiares', button:'/indique'},
    {title:'Meio Ambiente',image:'url(/static/images/meio_ambiente.png)', description:'Saiba nossas motivações e ações sobre o meio ambiente.', button:'/meio-ambiente'},
    {title:'Blog',image:'url(/static/images/home_blog.jpg)', description:'Falaremos de diversos assuntos relacionados a você e seu bem-estar.', button:'https://tkcomercio.com.br/blog'}
  ]
  
  return (
    <section className="section bg-gray d-block d-md-none" style={{marginTop:-50}}>
     

      <div className="container" style={{marginTop:-50}}>
      <div className="section-header">
      <h2 style={{fontWeight:'bold'}}>Saiba mais sobre a TK Clean</h2>
        </div>

  <div className="row gap-y" style={{backgroundColor:'transparent', marginTop: '-20%' }}>
{
  knowMoreArray.map((element,index) => {
let imageKnowMore = element.image

return(
  <div className="col-lg-3 mt-5" key={index}>
     <div className="card text-white bg-img" style={{cursor: 'pointer', height:'100%',width:'100%', backgroundImage:`${imageKnowMore}`}}>
     <div className="card-body text-center">
      <h6 className="card-title text-center">{element.title}</h6>
      <p>{element.description}</p>
    
    </div>
    <div style={{textAlign:'center',}}>
      <a style={{marginBottom:20, }} className="btn btn-lg btn-round btn-outline-light text-center" href={element.button}>Saiba Mais</a>
    </div>
    </div>
    </div>
)
  })
}
</div>


    <br/>    


      </div>
    </section>
  );
};

export default KnowMoreMobile;