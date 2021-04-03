const SliderHeader = (props) => {

  
  const {
    sliderState,
    actions,
    handleNextSlider

  } = props;

  let sliderArray = [
    {image:'url(/static/images/background_home_3.png)'},
    {image:'url(/static/images/videoindique.png)'},
    {image:'url(/static/images/background_home_3.png)',}
]
  return (
    <section className="section p-0 d-none d-md-block">
     {
       sliderArray.map((element, index)=>{
         if(index == sliderState.currentSlider){
          return(
            <div >
          <div className='section text-center' style={{backgroundImage:element.image, width:'100%', height:'650px'}}>
          <div style={{backgroundColor:'red',  marginTop:'10%',}}>
            <div style={{backgroundColor:'blue',width:'50%', float:'left',}}>
            <button style={{textAlign:'left', marginLeft:'-60%', }} onClick={(e)=> handleNextSlider({value:index})}>Previous</button>
            </div>
         <div style={{backgroundColor:'brown', width:'50%', float:'left', }}> 
         <button style={{textAlign:'right'}} onClick={(e)=> handleNextSlider({value:index})}>Next</button>
         </div>
         
          </div>
         
          </div>
         
          
            </div>
          )
          
         }

       })
     }
       
    </section>
  );
}

export default SliderHeader;
