import Link from 'next/link';

const KitsHomeMobile = (props) => {

  const {
    homeState: {
      kits,
      loadingProducts
    },
    actions,
  } = props;

  return (
    <section className="section d-block d-md-none" style={{ backgroundColor: 'white' }}>
      <div className="container" style={{ marginTop: -85 }}>
        <header className="section-header">
          <h3 >Kits TK Clean</h3>
          <p className="lead" style={{ lineHeight: 1.3 }}>#performancedelimpeza para sua casa. Escolha seu kit limpeza:</p>
        </header>
        <div className="row gap-y" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: -50 }}>
          {
            loadingProducts == true ?
              kits.map((element, index) => {
                let description = ''

                if (element.description.length > 90) {
                  description = element.description.slice(0, 90) + '...';
                } else {
                  description = element.description
                }
                description = description.replace(/<(.|\n)*?>/g, '');
                if(index <= 3){
                  return (
                    <div className="col-lg-3 w-80 text-center" key={index} >
  
  
                      <Link
                        href={`/compre-kit?kitURL=${element.kitURL}`}
                        as={`/compre-kit/${element.kitURL}`}
                        key={`/compre-kit/${index}`}>
                        <div className="card text-center shadow-1 hover-shadow-9" style={{ cursor: 'pointer', height: '100%', width: '100%' }}>
                          <img className="card-img-top" src={element.images[0]} alt="avatar" />
                          <p style={{ fontSize: 20, fontStyle: 'normal', fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}>{element.name}</p>
                          <p style={{ marginTop: -20, textAlign: 'left', marginLeft: 10, lineHeight: '18px' }}>{description}</p>
  
                        </div>
                      </Link>
                    </div>
  
                  )
                }
               


              })
              :
              <div className='container'> <h3 style={{ textAlign: 'center' }}><i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i>Carregando produtos aguarde...</h3></div>
          }
        </div>

      </div>
    </section>

  );
};

export default KitsHomeMobile;