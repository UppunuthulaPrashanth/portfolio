import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export default function Quadraticformula() {
  const [code, setCode] = React.useState(
    `
    Q).Quadratic formula using js  formula "-b=(2b-4ac)/2a" \n
        // program to solve quadratic equation
        let root1, root2;

        // take input from the user
        let a = prompt("Enter the first number: ");
        let b = prompt("Enter the second number: ");
        let c = prompt("Enter the third number: ");

        // calculate discriminant
        let discriminant = b * b - 4 * a * c;

        // condition for real and different roots
        if (discriminant > 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

            // result
            console.log("The roots of quadratic equation are ,root1, and ,root2,");
        }

        // condition for real and equal roots
        else if (discriminant == 0) {
            root1 = root2 = -b / (2 * a);

            // result
            console.log("The roots of quadratic equation are , root1, and ,root2,");
        }

        // if roots are not real
        else {
            let realPart = (-b / (2 * a)).toFixed(2);
            let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

            // result
            console.log(
            "The roots of quadratic equation are ,realPart, + ,imagPart, i and , realPart, - ,imagPart, i"
        );
    }
    `
  );
  return (
    <>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active">quadratic formula</li>
        </ol>
      </nav>

      <div className="row fibbonacci">
        <div className="col-md-7">
          <div className="card" style={{ borderRadius: "10px" }}>
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
        <div
          className="col-md-5 card"
          style={{ border: "1px solid", borderRadius: "10px" }}
        >
          <div className="m-5">
            <p>
              <b>Output : -0.227998127.. -9.772001872..</b>
            </p>
            <p>Uppunuthula Prashanth Goud</p>
            <p>Full stack developer</p>
            <p>
              Node js, Express js, React js, MongoDB, PHP, Laravel, Mysql,
              Javascript, HTML, CSS, Bootstrap, Aws Ec2, Route53, Cloudfront,
              S3, Shared hosting
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
