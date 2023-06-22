import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}


export default App;
