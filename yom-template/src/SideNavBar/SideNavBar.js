import React from 'react';
import './SideNavBar.css';

class SideNavBar extends React.Component {
   render() {
      return (
         <div class="sideNavBarWrap">
             <ul className="sideNavBar">
                 <li className="sideNavBarItem"><a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Header</a></li>
                 <li className="sideNavBarItem"><a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Paragraph</a></li>
                 <li className="sideNavBarItem"><a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Section</a></li>
                 <li className="sideNavBarItem"><a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Block</a></li>
                 <li className="sideNavBarItem"><a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Link</a></li>
             </ul>
         </div>
      );
   }
}

export default SideNavBar;