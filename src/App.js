import './App.css';
import Card from './components/card.js';


function App() {
    const user ={
      name : 'Luornor Nathan',
      avatarUrl: 'https://th.bing.com/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    }
    const info = {
        bio: 'Software Engineer, Bloomberg',
        website: 'linkedin.com/in/nathan-tettey-luornor-5a6691248',
        email: 'tetteynathan89@gmail.com',
        location: "Accra, Ghana",
        linkedin: "linkedin.com/in/nathan-tettey-luornor-5a6691248",
        github: 'https://github.com/luornor?tab=repositories'
      }

  return (
    <div className="App">
      <Card user={user} info={info}/>
    </div>
  );
}

export default App;
