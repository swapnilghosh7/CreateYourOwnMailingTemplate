import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavBar from '../SideNavBar/SideNavBar';
import './DragTemplate.css';
class DragTemplate extends React.Component {
   render() {
      return (
         <div class="contentWrap">
            <div className="container clearfix">
                    <SideNavBar />
               
            </div>
            
         </div>
      );
   }
}

export default DragTemplate;