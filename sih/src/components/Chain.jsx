import styled from "styled-components";
import { Web3Storage } from "web3.storage";
import { useState } from "react";

const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweERlMzUwNmEyNDIwYjUyOEMxMjdmNEU3OTdlNjJkNDdFQmQ1Rjg0N2EiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjEzNzc2ODQ3MjIsIm5hbWUiOiJzaWgifQ.rNA-S28yC0UX2XpwwFX-5r02MyrANfYGPe27t1G8N3E";

const client = new Web3Storage({ token: apiToken });

const Head = styled.h2`
color:#24a19c;
margin-top:10%;
margin-left:30px;
`
const FileTitle = styled.label`
color:#24a19c;
margin-left:30px;`

const Button = styled.button`
background-color:#24a19c;
border:0px;
height:50px;
width:100px;
border-radius:17px;
margin-top:20px;
margin-left:30px;
`
export default function Chain() {
  const [file, setFile] = useState("");
  const handleUpload = async () => {
    console.log(document.getElementById("input").files[0]);
    var fileInput = document.getElementById("input");

    const rootCid = await client.put(fileInput.files, {
      name: "cat pics",
      maxRetries: 3
    });

    console.log(rootCid);

    const res = await client.get(rootCid);
    const files = await res.files();
    console.log(files);
    const url = URL.createObjectURL(files[0]);
    console.log(url);
    setFile(url);
  };
  return (
    <div className="App">
      <Head>Store your marksheets and aadhar card in decentralized format</Head>
      
      <img src={file} />

      <div>
        <FileTitle for="file"> Choose file to upload</FileTitle>
        <input type="file" id="input" name="file" multiple />
      </div>
      <div>
        <Button onClick={handleUpload}>Submit</Button>
      </div>
    </div>
  );
}