import Link from 'next/link';

const KitsHome = (props) => {

  const {
    homeState: {
      kits,
      loadingProducts
    },
    actions,
  } = props;
  
  return (
    <section className="section d-none d-md-block" style={{backgroundColor:'white'}}>
    <div className="container" style={{marginTop:-60,  }}>
      <div  style={{alignItems:'center', textAlign:'center'}}>
        <h2 >Kits TK Clean</h2>
        <br />
        <p style={{marginTop:-30}} className="lead">#performancedelimpeza para sua casa. Escolha seu kit limpeza:</p>
      </div>

      <div className="row gap-y" >

          {loadingProducts == true ?
            kits.map((element, index) => {
              let description = ''
              
              if(element.description.length > 90){
                description = element.description.slice(0,90) + '...';
              }else{
                description = element.description
              }
               
              return (
                <div className="col-6 col-lg-3" key={index}>
                  <Link 
                  href={`/compre-kit?kitURL=${element.kitURL}`}
                  as={`/compre-kit/${element.kitURL}`}
                  key={`/compre-kit/${index}`}>
                    <div className="card text-center shadow-1 hover-shadow-9" style={{ cursor: 'pointer', height:'100%',width:'100%'}}>
                      <img className="card-img-top" src={element.images[0]} alt="avatar"  />
                        <p style={{ fontSize: 20, fontStyle: 'normal', fontWeight: 'bold', textAlign: 'left', marginLeft:10 }}>{element.name}</p>
        <p  style={{marginTop:-20, textAlign:'left', marginLeft:10, lineHeight:'18px'}}>{description}</p>
                        
                    </div>
                  </Link>
                </div>

              )
            })
            :
            <div className='container'> <h3 style={{textAlign:'center'}}><i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i>Carregando produtos aguarde...</h3></div>
          }
        </div>

      </div>
      <br/>
     
    </section>

  );
};

export default KitsHome;