import React, { useState } from 'react'

export default function PasswordGenrator() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*';

    const [genpwd, setGenpwd]=useState('Qmvpw8$cLj');
    const genratePwd=()=>{
        var length=10
        var result=''
        setGenpwd(Math.random(19))
        for(var i=0, n=charset.length; i<length; i++){
            result+=charset.charAt(Math.floor(Math.random()*n))
        }
        setGenpwd(result)
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-10 mx-auto'>
                <div className='card'>
                    <div className='m-5'>
                        <button className='btn btn-primary' onClick={()=>genratePwd()}>Generate password</button>
                        <br/>
                        <br/>
                        <br/>
                        <p>Genarated password : <span style={{fontWeight:'bold'}}>{genpwd}</span></p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
