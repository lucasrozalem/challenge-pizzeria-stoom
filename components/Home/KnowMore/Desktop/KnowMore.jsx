const KnowMore = () => {
  
  let knowMoreArray=[
    {title:'Quem somos',image:'url(/static/images/pizzalogo.png)', description:'Conheça um pouco sobre nós e nossa forma de agir.', button:'/quem-somos'},
    {title:'Nossas Pizzas',image:'url(/static/images/pizzas.jpg)', description:'Ganhe dinheiro indicando amigos e familiares', button:'/indique'},
    {title:'Ingredientes',image:'url(/static/images/ingredientes.jpg)', description:'Saiba nossas motivações e ações sobre o meio ambiente.', button:'/meio-ambiente'},
    {title:'Blog',image:'url(/static/images/home_blog.jpg)', description:'Falaremos de diversos assuntos relacionados a você e seu bem-estar.', button:'https://tkcomercio.com.br/blog'}
  ]
  
  return (
    <section className="section bg-gray d-none d-md-block" style={{marginTop:-50}} >
     

      <div className="container" style={{marginTop:-50}}>
      <div className="section-header">
      <h2 style={{fontWeight:'bold'}}>Saiba mais sobre a Pizzaria</h2>
        </div>

  <div className="row gap-y" style={{backgroundColor:'transparent' }}>
{
  knowMoreArray.map((element,index) => {
let imageKnowMore = element.image

return(
  <div className="col-6 col-lg-3" key={index}>
     <div className="card text-white bg-img" style={{cursor: 'pointer', height:'100%',width:'100%', backgroundImage:`${imageKnowMore}`}} >
     <div className="card-body text-center" >
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

export default KnowMore;