

import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export default function Stringreverse() {
  const [code, setCode] = React.useState(
    `
    Q)Given a string, reverse each word in the sentence\n
    var string = "Welcome to this Javascript Guide!"; \n

    // Output becomes !ediuG tpircsavaJ siht ot emocleW
    var reverseEntireSentence = reverseBySeparator(string, "");\n
    
    // Output becomes emocleW ot siht tpircsavaJ !ediuG
    var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");\n
    
    function reverseBySeparator(string, separator) {
      return string.split(separator).reverse().join(separator);\n
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
      <div className="col-md-4 card" style={{border:"1px solid", borderRadius:'10px'}}>
            <div className="m-5">
                <p><b>Output : emocleW ot siht tpircsavaJ !ediuG</b></p>
                <p>Uppunuthula Prashanth Goud</p>
                <p>Full stack developer</p>
                <p>Node js, Express js, React js, MongoDB, PHP, Laravel, Mysql, Javascript, HTML, CSS, Bootstrap, Aws Ec2, Route53, Cloudfront, S3, Shared hosting</p>
            </div>
      </div>
    </div>
    </>
  );
}
