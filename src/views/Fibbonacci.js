import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export default function Fibbonacci() {
  const [code, setCode] = React.useState(
    `
    Q).Fibbonacci series of 10 \n
    function fibbonacci(i){\n
        if(i==0){\n
            return 1\n
        }else if(i==1){\n
            return 1\n
        }else{\n
            return(fibbonacci(i-1) + fibbonacci(i-2));\n
        }\n
    }
    
    for(var i=0; i<10; i++){
        console.log(fibbonacci(i))
    }`
  );
  return (
    <>
    <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active">fibbonacci</li>
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
                <p><b>Output : 0,1,1,2,3,5,8,13,21,34</b></p>
                <p>Uppunuthula Prashanth Goud</p>
                <p>Full stack developer</p>
                <p>Node js, Express js, React js, MongoDB, PHP, Laravel, Mysql, Javascript, HTML, CSS, Bootstrap, Aws Ec2, Route53, Cloudfront, S3, Shared hosting</p>
            </div>
      </div>
    </div>
    </>
  );
}
