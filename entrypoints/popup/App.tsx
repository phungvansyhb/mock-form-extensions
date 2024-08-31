import reactLogo from '@/assets/react.svg';
import './App.css';
import wxtLogo from '/wxt.svg';

function App() {
  async function handleMockForm(){
    const [tab] = await browser.tabs.query({active: true, currentWindow: true})
    browser.scripting.executeScript({
          target: { tabId: tab.id! },
          files : ['./fakeForm.js']
        });
  }
  browser.runtime.onMessage.addListener((message : any) => {
    console.log(message)
  })
  return (
    <>
      
      <h1>Mocker form faster</h1>
      <div className="card">
          <ul>
              <li>1. Hold <b>Shift</b> key and choose input of form that you want to mock</li>
              <li>2. <b>Click</b> and see magic :)) </li>
          </ul>
      </div>
      
    </>
  );
}

export default App;
