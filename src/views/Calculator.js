import React from 'react'

export default function Calculator() {

    const getValue = ((value)=>{
        console.log(value)
        document.querySelector('#result').value+=value;
    })
    
    const removeValue=(()=>{
        var data = document.querySelector('#result').value
        document.querySelector('#result').value=data.slice(0, -1)

    })

    const calculate=(()=>{
        var result = document.querySelector('#result').value
        document.querySelector('#result').value=eval(result)

    })

  return (
    <>
        <div className='row calculator' >
            <div className='col-md-6 offset-2'>
                <div className='card' style={{borderRadius:'20px'}}>
                    <div className='m-5 animate__bounce'>
                        <h5 className='animate__bounce'>Calculator</h5>
                        <input className='form-control' id='result'/>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue(1)}>1</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue(2)}>2</button>
                                    </div>
                                    <div className='col-4 mb-2'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue(3)}>3</button>
                                    </div>
                                    <div className='col-4 mb-2'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue(4)}>4</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue(5)}>5</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue(6)}>6</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue(7)}>7</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue(8)}>8</button>
                                    </div>
                                    <div className='col-4 mb-2'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue(9)}>9</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue('.')}>&nbsp;.&nbsp;</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>getValue(0)}>0</button>
                                    </div>
                                    <div className='col-4'>
                                        <button className='btn animate__bounce btn-lg' onClick={()=>calculate()}>=</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                            <div className='row'>
                                <div className='col-6'>
                                    <button className='btn animate__bounce btn-lg' onClick={()=>removeValue()}> <i className='fa fa-backward'></i></button>
                                </div>
                                <div className='col-6 mb-2'>
                                    <button className='btn animate__bounce btn-lg' onClick={()=>getValue('+')}>+</button>
                                </div>
                                <div className='col-6'>
                                    <button className='btn animate__bounce btn-lg' onClick={()=>getValue('/')}>&nbsp;/&nbsp;</button>
                                </div>
                                <div className='col-6 mb-2'>
                                    <button className='btn animate__bounce btn-lg' onClick={()=>getValue('-')}> -&nbsp; </button>
                                </div>
                                <div className='col-6'>
                                    <button className='btn animate__bounce btn-lg' onClick={()=>getValue('%')}>%</button>
                                </div>
                                <div className='col-6'>
                                    <button className='btn animate__bounce btn-lg' onClick={()=>getValue('*')}>*&nbsp;</button>
                                </div>
                                <div className='col-md-12 mt-3 text-white'><h6>Prashanth</h6></div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
