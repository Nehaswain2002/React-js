import React from 'react'
import {Bookmark} from 'lucide-react'
const App = () => {
  return (

  <div className="parent">
      <div className="card">
<div className="top">
<img src="https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg" alt="" />
<button>Save <Bookmark /> </button>
</div>
<div className="center">
<h3>Amazon <span>5 days ago</span></h3>
<h2>senior UI/UX Designer</h2>

<div>
  <h4>Part Time</h4>
    <h4>Senior Level</h4>
</div>
</div>
<div className="bottom">
<div>

  <h3>$120/hr</h3>
    <p>mumbai, India</p>

  </div>
  <button>Apply Now</button>

</div>
    </div>
    </div>
   
  )
}

export default App
