import './App.css';
import React, {useState ,useEffect} from 'react';
import {marked} from 'marked'

const quotes = [
  {
      "name": "Blockquotes",
      "description": "To create a blockquote, add a `>` in front of a paragraph.",
      "examples": [
          {
              "markdown": "> Dorothy followed her through many of the beautiful rooms in her castle.",
              "html": "<blockquote><p>Dorothy followed her through many of the beautiful rooms in her castle.</p></blockquote>"
          }
      ],
      "additional_examples": [
          {
              "name": "Blockquotes with Multiple Paragraphs",
              "description": "Blockquotes can contain multiple paragraphs. Add a `>` on the blank lines between the paragraphs.",
              "markdown": "> Dorothy followed her through many of the beautiful rooms in her castle.\n>\n> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.\n",
              "html": "<blockquote><p>Dorothy followed her through many of the beautiful rooms in her castle.</p><p>The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.</p></blockquote>"
          },
          {
              "name": "Nested Blockquotes",
              "description": "Blockquotes can be nested. Add a `>>` in front of the paragraph you want to nest.",
              "markdown": "> Dorothy followed her through many of the beautiful rooms in her castle.\n>\n>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.\n",
              "html": "<blockquote><p>Dorothy followed her through many of the beautiful rooms in her castle.</p><blockquote><p>The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.</p></blockquote></blockquote>"
          },
          {
              "name": "Blockquotes with Other Elements",
              "description": "Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you'll need to experiment to see which ones work.",
              "markdown": "> ### The quarterly results look great!\n>\n> - Revenue was off the chart.\n> - Profits were higher than ever.\n>\n>  *Everything* is going according to **plan**.\n",
              "html": "<blockquote><h3>The quarterly results look great!</h3><ul><li>Revenue was off the chart.</li><li>Profits were higher than ever.</li></ul><p><em>Everything</em> is going according to <strong>plan</strong>.</p></blockquote>"
          }
      ]
  },
  {
      "name": "Bold",
      "description": "To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.",
      "examples": [
          {
              "markdown": "I just love **bold text**.",
              "html": "I just love <strong>bold text</strong>."
          },
          {
              "markdown": "I just love __bold text__.",
              "html": "I just love <strong>bold text</strong>."
          },
          {
              "markdown": "Love**is**bold",
              "html": "Love<strong>is</strong>bold"
          }
      ],
      "additional_examples": []
  },
  {
      "name": "Code",
      "description": "To denote a word or phrase as code, enclose it in tick marks (`` ` ``).",
      "examples": [
          {
              "markdown": "At the command prompt, type `nano`.",
              "html": "At the command prompt, type <code>nano</code>."
          }
      ],
      "additional_examples": [
          {
              "name": "Escaping Tick Marks",
              "description": "If the word or phrase you want to denote as code includes one or more tick marks, you can escape it by enclosing the word or phrase in double tick marks (<code>``</code>).",
              "markdown": "``Use `code` in your Markdown file.``",
              "html": "<code>Use `code` in your Markdown file.</code>"
          },
          {
              "name": "Code Blocks",
              "description": "To create code blocks, indent every line of the block by at least four spaces or one tab.",
              "markdown": "<html>\n  <head>\n  </head>\n</html>\n",
              "html": "<pre><code><html><head></head></html></code></pre>"
          }
      ]
  },
  {
      "name": "Headings",
      "description": "To create a heading, add number signs (`#`) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (`<h3>`), use three number signs (e.g., `### My Header`).",
      "examples": [
          {
              "markdown": "# Heading level 1",
              "html": "<h1>Heading level 1</h1>"
          },
          {
              "markdown": "## Heading level 2",
              "html": "<h2>Heading level 2</h2>"
          },
          {
              "markdown": "### Heading level 3",
              "html": "<h3>Heading level 3</h3>"
          },
          {
              "markdown": "#### Heading level 4",
              "html": "<h4>Heading level 4</h4>"
          },
          {
              "markdown": "##### Heading level 5",
              "html": "<h5>Heading level 5</h5>"
          },
          {
              "markdown": "###### Heading level 6",
              "html": "<h6>Heading level 6</h6>"
          }
      ],
      "additional_examples": [
          {
              "name": "Alternative H1 Syntax",
              "description": "Alternatively, on the line below the text, add any number of == characters for heading level 1.",
              "markdown": "Heading level 1\n===============\n",
              "html": "<h1>Heading level 1</h1>"
          },
          {
              "name": "Alternative H2 Syntax",
              "description": "Alternatively, on the line below the text, add any number of -- characters for heading level 2.",
              "markdown": "Heading level 2\n---------------\n",
              "html": "<h2>Heading level 2</h2>"
          }
      ]
  },]



const App = () => {
  const [code, setCode] = useLocalStorage('## Hello' , 'Code')
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>')
  const [hide, hidePreview] = useState(true)
  const [toggle , setToggle] = useState(false)
  const [data , setData] = useState([])
  const [active , setActive] = useState(0)
 

  const openMD = () => {
    console.log(0)
    hidePreview(true)
    setToggle(false)
    setActive(1)
  }

  const openPreview = () => {
    console.log(0)
    hidePreview(false)
    setToggle(false)
    setActive(2)
  }

  const handleChange = (e) => {
    setCode(e.target.value)
    setCompiled(marked.parse(e.target.value))
  }

  const handleToggle = () => {
    setToggle(curr => !curr)
    setActive(3)
  }
  
 
/*

  useEffect(
    function () {
     const response = fetch('https://www.markdownguide.org/api/v1/basic-syntax.json') 
     .then(res => res.json())
     .then(data => setData(data))  
    },
    []
  );
  console.log(data)


  */

  useEffect(
    function () {
     setData(quotes)
    },
    []
  );
  console.log(data)

  return (
    <>
      <h1>MarkDown Previewer React App</h1>

      <div className="container">
        <div className="btns">
          <Button onClick={openMD} num = {1} active={active}>MarkDown</Button>
          <Button onClick={openPreview} num = {2} active={active} >Preview</Button>
          <Button onClick={handleToggle} num = {3} active={active} >Docs</Button>
        </div>

      { toggle &&  (
      <div className='background'>  
        {data?.map((ele , inx) => (
        <DocsList ele={ele} key={inx} />
      ))} 
      </div>) }

        { hide && !toggle &&  (
          <div>
            <textarea onChange={handleChange} value={code}/>
          </div> ) }

        {!hide && !toggle && (
          <div>
            <textarea value={compiled}/>
          </div> )
        }
        
      </div>
    </>
  )
}


export default App;



const DocsList = ({ele}) => {
  return (
    <div className='position'>

       <h1>{ele.name}</h1>
       <h4>{ele.description}</h4>
       <div>
       <h2>Example 1 :</h2>
       {ele.examples.map((example) => 
       <>
        <h2>MarkDown</h2>
        <h3>{example.markdown}</h3>
        <h3>Html</h3>
        <h4>{example.html}</h4>
       </> 
           )}
       
       <h3>{ele.additional_examples[0]?.name}</h3>
       <h4>{ele.additional_examples[0]?.description}</h4>
       </div>

    </div>
  )
}




const Button = ({children , onClick , num , active}) => {
  
  return (
    <button onClick = {onClick} num ={num} className={active === num ? "btn" : ""}>{children}</button>
  )
}




function useLocalStorage(initialState, key) {

  const [code, setCode] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(code));
    },
    [code, key]
  );

  return [code, setCode];
}