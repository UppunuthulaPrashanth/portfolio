

import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export default function Sortingstring() {
  const [code, setCode] = React.useState(
    `
    Q).Sorting strings in array \n
    function sortNames(){
      var names=["Prashanth","Chandu", "Balakrishana", "Bharath", "Bhanu"]\n
      for(var j=0; j<names.length; j++){\n
        for(var i=0; i<names.length-1; i++){\n
          if(names[i].length>names[i+1].length){\n
            temp = names[i]\n
            names[i]=names[i+1]\n
            names[i+1]=temp\n
          }
        }
      }
    return names
  }
  sortNames()
      `
  );
  return (
    <>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active">sorting strings</li>
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
                <p><b>
                Output : 
                [ 'Bhanu',
                'Chandu',
                'Bharath',
                'Prashanth',
                'Balakrishana' ]
                </b></p>
                <p>Uppunuthula Prashanth Goud</p>
                <p>Full stack developer</p>
                <p>Node js, Express js, React js, MongoDB, PHP, Laravel, Mysql, Javascript, HTML, CSS, Bootstrap, Aws Ec2, Route53, Cloudfront, S3, Shared hosting</p>
            </div>
      </div>
    </div>
  </>
  );
}
