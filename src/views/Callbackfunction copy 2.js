

import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export default function Callbackfunction() {
  const [code, setCode] = React.useState(
    `
    callback function with example \n
    function modifyArray(arr, callback) {
        // do something to arr here 
        arr.push(100);\n
        // then execute the callback function that was passed\n
        callback();\n
      }
      
      var arr = [1, 2, 3, 4, 5];\n
      
      modifyArray(arr, function() {
        console.log("array has been modified", arr);\n
      });
      `
  );
  return (
    <div className="row fibbonacci" >
      <div className="col-md-6">
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
      <div className="col-md-4 card" style={{border:"1px solid", borderRadius:'10px'}}>
            <div className="m-5">
                <p><b>Output : 0,1,1,2,3,5,8,13,21,34</b></p>
                <p>Uppunuthula Prashanth Goud</p>
                <p>Full stack developer</p>
                <p>Node js, Express js, React js, MongoDB, PHP, Laravel, Mysql, Javascript, HTML, CSS, Bootstrap, Aws Ec2, Route53, Cloudfront, S3, Shared hosting</p>
            </div>
      </div>
    </div>
  );
}
