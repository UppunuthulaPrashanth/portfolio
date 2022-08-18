

import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export default function AmstrongNumber() {
  const [code, setCode] = React.useState(
    `
    Q)Check a number amstrong or not\n
    var userInput ='153';
    var userInputLength = userInput.length
    var sum=0
    
    for(var i=0; i<userInputLength; i++){
        sum+=Math.pow(userInput.charAt(i), userInputLength)
    }
    
    if(userInput == sum){
        console.log('given number is a amstrong number', sum)
    }else{
        console.log('given number is not amstrong number', sum)
    }
      `
  );
  return (
    <>
    <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active">string reverse</li>
        </ol>
      </nav>
    <div className="row fibbonacci" >
      <div className="col-md-7">
        <div className="card" style={{ borderRadius:'10px'}}>
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
        </div>
      </div>
      <div className="col-md-5 card" style={{border:"1px solid", borderRadius:'10px'}}>
            <div className="m-5">
                <p><b>Output : given number is a amstrong number 153</b></p>
                <p style={{fontWeight:"200"}}>Uppunuthula Prashanth Goud</p>
                <p>Full stack developer</p>
                <p>Node js, Express js, React js, MongoDB, PHP, Laravel, Mysql, Javascript, HTML, CSS, Bootstrap, Aws Ec2, Route53, Cloudfront, S3, Shared hosting</p>
            </div>
      </div>
    </div>
    </>
  );
}
