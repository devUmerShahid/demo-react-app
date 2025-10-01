import React, { useState } from 'react'

import {Custom_Message, Core_Cocepts, EXAMPLES} from './data';
import CustomMessage from './Components/CustomMessage';
import Header from './Components/Header.jsx';
import TabButtons from './Components/TabButtons.jsx';

// function CoreConcepts({title, image, description}){
//   return(
//     <li>
//       <img src={image} alt="" />
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </li>
//   )
// }

const App = () => {

  const [selectedTopic, setSelectedTopic]=useState('components')
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }
  console.log('App Components Executing');

  return (
    <div>
      <div>
        <Header/>
      <main>
        <section id="custom-message">
        <h2>Time to get started!</h2>
        {/* {Custom_Message.map((messageItem)=> <CustomMessage{...messageItem}/>)} */}
        <ul>

          {Custom_Message.map((messageItem)=> <CustomMessage key={messageItem.title} {...messageItem}/>)}

          {/* <CustomMessage{...Custom_Message[0]}/>
          <CustomMessage{...Custom_Message[1]}/>
          <CustomMessage{...Custom_Message[2]}/>           */}
        </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButtons isSelected={selectedTopic==='components'}
            onSelect={()=>handleSelect('components')} label='Components'/>

            <TabButtons isSelected={selectedTopic==='jsx'}
            onSelect={()=>handleSelect('jsx')} label='Jsx'/>

            <TabButtons isSelected={selectedTopic==='props'}
            onSelect={()=>handleSelect('props')} label='Props'/>

            <TabButtons isSelected={selectedTopic==='state'}
            onSelect={()=>handleSelect('state')} label='State'/>
          </menu>
          {selectedTopic}
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>

      {/* <main>
        <section id="custom-message">
          <ul>
            <CoreConcepts{...Core_Cocepts[0]}/>
            <CoreConcepts{...Core_Cocepts[1]}/>
            <CoreConcepts{...Core_Cocepts[2]}/>
          </ul>
        </section>
      </main> */}
    </div>
    </div>
  )
}

export default App