import About from "./(routes)/about/page";

import Contact from "./(routes)/contact/page";
import Home from "./(routes)/home/page";
import Signup from "./(routes)/signup/page";

export default function Homepage(){
  return(
    <div>
      <Home/>
      <About/>
      <Contact/>
      <Signup/>
    </div>
  )
}