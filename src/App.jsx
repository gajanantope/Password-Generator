import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const[Length,setLength]=useState(8);
  const[Number,setNumber]=useState(false);
  const[charter,setcharter]=useState(false);
  const[Password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz";
      if(Number) str+="1234567890";
      if(charter) str+="@#$&*!~><?";

       for(let i=1;i <= Length;i++){
      let char = Math.floor(Math.floor(Math.random() * str.length) + 1);  
          pass+= str.charAt(char);
          console.log(pass);
       }
       setPassword(pass) ;
  },[Length,Number,charter,setPassword]) 
  
  const passwordRef=useRef()  //useRef HOOk

  useEffect(()=>{passwordGenerator();},[Length,Number,charter])

  const copyPassword=useCallback(()=>{
    window.navigator.clipboard.writeText(Password);
passwordRef.current?.select();    //     passwordRef.current?.select();

  },[Password])


  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700">

        <h1 className="text-2xl text-white mb-4 mx-auto my-auto">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            placeholder="password"
            readOnly
            className=" outline-none w-full py-1 px-3 "
            ref={Password}
          />
          <button
            className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
           onClick={copyPassword}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={25}
              value={Length}
              className="cursor-pointer accent-blue-700"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{Length}</label>
          </div>

          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={Number}
              id="numberInput"
              onChange={()=>{
                setNumber((prev)=>!prev)
              }}
            
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charter}
              id="characterInput"
              onChange={()=>{
                setcharter((prev)=>!prev)}}
             
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;






























// const [length, setLength] = useState(0);
//   const [number, setNumber] = useState(false);
//   const [characters, setCharacters] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordRef = useRef();

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (number) {
//       str += "0123456789";
//     }
//     if (characters) {
//       str += "!@#$%&*_=~";
//     }

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.floor(Math.random() * str.length) + 1);

//       pass += str.charAt(char);
//     }

//     setPassword(pass);
//   }, [length, number, characters, setPassword]);

//   const copyPassword = useCallback(() => {
//     passwordRef.current?.select();
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, number, characters, passwordGenerator]);
