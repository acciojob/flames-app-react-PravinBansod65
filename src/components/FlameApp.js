export default FlameApp;

const FlameApp = () => {
    const flameobj = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };
  
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [answer, setAnswer] = useState("");
  
    function clearHandler(){
      setInput1('');
      setInput2('');
      setAnswer('');
      
    }
    function handleChangeInput1() {
      setInput1(event.target.value);
    }
    function handleChangeInput2() {
      setInput2(event.target.value);
    }
    function calculate() {
      // return "abc";
      const str = input1.toLowerCase()+input2.toLowerCase();
  
      // convert the string to an array of characters
      const arr = str.split("");
  
      // use the Set data structure to remove duplicates
      const uniqueArr = [...new Set(arr)];
  
      // convert the array back to a string
      const uniqueStr = uniqueArr.join("");
      console.log(uniqueStr); 
  
      
      let ans= (uniqueStr.length % 6);
  
      if(str.length === 0) {
          
        return setAnswer("Please Enter valid input");
      }
      
      console.log(ans); 
      switch (ans) {
        case 1:
          setAnswer("Friends")
          break;
        case 2:
          setAnswer("Love")
          break;
        case 3:
          setAnswer("Affection")
          break;
        case 4:
          setAnswer("Marriage")
          break;
        case 5:
          setAnswer("Enemy")
          break;
        case 0:
          setAnswer("Siblings")
          break;
        // default:
          // setAnswer("Please Enter valid input")
      }
    }
  
    
    // setAnswer(input1+input1);
  
    return (
      <>
        <div className="main">
          <input
            className="input1"
            data-testid="input1"
            type="text"
            id="input1"
            value={input1}
            onChange={handleChangeInput1}
          />
          <input
            className="input2"
            data-testid="input2"
            type="text"
            id="input1"
            value={input2}
            onChange={handleChangeInput2}
          />
          <button
            data-testid="calculate_relationship"
            onClick={() => {
              setAnswer(calculate);
            }}
          >
            Calculate Relationship Future
          </button>
          <button data-testid="clear" onClick={clearHandler}>Clear</button>
          {/* <br> */}
          <h3 data-testid="answer">{answer}</h3>
        </div>
      </>
    );
  };