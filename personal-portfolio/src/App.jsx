import './App.css'
import './index.css';
import icon from './assets/icon.jpeg';

function App() {
  return (
    <div className="flex items-center text-[#C72D2D] text-left w-full">
      <div className="w-2/3">
        <h1 className='text-5xl mb-10'>HELLO, I'M SAMA AHMED</h1>
        <p className='text-2xl'>A passionate computer science student @csuf who loves solving problems with code and enjoys taking on leadership roles to help projects and teams succeed</p>
      </div>
      <img src={icon} alt='icon' className='rounded-full w-1/4 h-1/4 ml-4'/>
    </div>
  );
}

export default App