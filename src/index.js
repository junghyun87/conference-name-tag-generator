import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var Group = React.createClass({
  getInitialState: function(){
    return {table:[]};
  },

  readSingleFile: function(evt) {
    var that = this;
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
        var contents = e.target.result;
        var people_list = contents.split('\n');
        var mygroup = [];

        var roleColor={
          조직위원장:'#FFC000',
          조직위원:'#FFC000',
          학술위원장:'#FFC000',
          학술위원:'#FFC000',
          대회장:'#FF0000',
          STAFF:'#00B0F0',
          일반: '#82C940',
          학생: '#82C940',
          초청인사: '#0070C0'
        }

        people_list.forEach(function(people){
            var people_info = people.split('\t');
            var role = people_info[2].trim();            
            var color = roleColor[role]
            var textcolor = 'white'
            if (role == "일반" || role == "학생"){
              textcolor = roleColor[role]
            }
            var people_jsx = (<App role={role} 
                                   fullname={people_info[0]} 
                                   affiliation={people_info[1]} 
                                   color={color}
                                   textcolor={textcolor}/>)
            mygroup.push(people_jsx)
        });

        that.setState({table: mygroup});

      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  },

  render: function(){
    return (<div id="mygroup">
        <input type="file" id="fileinput" onChange={this.readSingleFile}/>
        {
          this.state.table
        }
    </div>);
  }
})

ReactDOM.render(
    <Group/>,
  
  document.getElementById('root')
);
