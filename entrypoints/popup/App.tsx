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
  return (
    <>
      <div>
        <a href="https://wxt.dev" target="_blank">
          <img src={wxtLogo} className="logo" alt="WXT logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WXT + React</h1>
      <div className="card">
        <button onClick={() => handleMockForm()}>
          mock form
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the WXT and React logos to learn more
      </p>
    </>
  );
}

export default App;
