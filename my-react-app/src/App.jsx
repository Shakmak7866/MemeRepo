import { useState } from 'react'

function App() {
    const [file, setFile] = useState(null);

    function ChangeImage(e) {
        console.log(e.target.files);
        //setFile(e.target.files[0]); // Here we successfully have the file and it is stored in file variable. But we need to preview it to0
        // Use the following code to preview it as well
        setFile(URL.createObjectURL(e.target.files[0])); // Here we successfully have the file and it is stored in file variable. But we need to preview it to0
    }



    return (
        <div className="App">
            <h2>Upload Image</h2>
            <input type="file" onChange={ChangeImage}></input>
            {file && <img src={file} width="500"></img>}
        </div>
    )
}

export default App
