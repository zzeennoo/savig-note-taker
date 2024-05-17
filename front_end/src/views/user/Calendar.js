import React, {useEffect, useState} from "react";

import { Card, CardBody, CardFooter, Container, Row, Col } from "reactstrap";
import { Component } from 'react';

import NotesHeader from "components/Headers/NotesHeader.js";
import Scheduler from 'components/Scheduler';

import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';

const scheduler = window.scheduler;

const haha = [
  { start_date:'2023-11-25 6:00', end_date:'2023-11-25 9:00', text:'Event 1', id: 1},
  { start_date:'2023-11-22 10:00', end_date:'2023-11-22 18:00', text:'Event 2', id: 2 },
  //{start_date: 'Tue Nov 21 2023 02:10:00 ', end_date: 'Tue Nov 21 2023 07:15:00 ', text: 'fs', id: 1704085403824,},
];

// const data2 = fetch('http://localhost:5000/api');
// const data = data2.json();

//var haha;
// async function getData()
// {
//   const response = await fetch('http://localhost:5000/api');
//   const dataa = await response.json();
//   //haha = dataa;
//   console.log(dataa);
//   return dataa;
// }
//var haha = getData.then(data => data);
//getData();
// const data = getData();
// console.log(data);


class Calendar extends Component {

  constructor(props) {
      super(props);
      this.state = {
        currentTimeFormatState: true,
        messages: [],
        data: null,
        test: '',
    };
  }
  // state = {
  //     currentTimeFormatState: true,
  //     messages: [],
  //     data: [],
  // };

  addMessage(message) {
      const maxLogLength = 5;
      const newMessage = { message };
      const messages = [
          newMessage,
          ...this.state.messages
      ];

      if (messages.length > maxLogLength) {
          messages.length = maxLogLength;
      }
      this.setState({ messages });
  }

  logDataUpdate = (action, ev, id) => {
      const text = ev && ev.text ? ` (${ev.text})` : '';
      const message = `event ${action}: ${id} ${text}`;
      this.addMessage(message);
      //console.log(Scheduler.getEvent(id).start_date);
      var formatFunc = scheduler.date.date_to_str("%Y-%m-%d %H:%i");
      var start_datee = formatFunc(ev.start_date);
      var end_datee = formatFunc(ev.end_date);
      let addedEvent = {};
      addedEvent.start_date = start_datee
      addedEvent.end_date = end_datee
      addedEvent.text = ev.text
      addedEvent.id = ev.id
      
      console.log(start_datee);
      //console.log(action);
      if(action == 'create')
      {
        // fetch('http://localhost:5000/api/create',
        // {
        //   method: 'post',
        //   headers:{
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(addedEvent),
        // })
        fetch('https://savig-project.vercel.app/api/create',
        {
          method: 'post',
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addedEvent),
        })
      }
      else if(action == 'delete')
      {
        // fetch('http://localhost:5000/api/delete',
        // {
        //   method: 'post',
        //   headers:{
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({id: ev.id}),
        // })
        fetch('https://savig-project.vercel.app/api/delete',
        {
          method: 'post',
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id: ev.id}),
        })
      }
      else if(action == 'update')
      {
        // fetch('http://localhost:5000/api/update',
        // {
        //   method: 'post',
        //   headers:{
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(addedEvent),
        // })
        fetch('https://savig-project.vercel.app/api/update',
        {
          method: 'post',
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addedEvent),
        })
      }

  //     fetch('http://localhost:5000/api').then((response) => {return response.json()}).then((dataa) => {
  //   //const tmp = dataa;
  //   that.setState({data : dataa, test: "yeah",});
  //   console.log(that.state.data);
  //   console.log(that.state.test);
  // })
  // .catch(console.error);
  // console.log('logDataUpdate');
    //this.render();
  }

  handleTimeFormatStateChange = (state) => {
      this.setState({
          currentTimeFormatState: state
      });
  }
  //  componentWillMount() {
  //   const that = this;
  //   fetch('http://localhost:5000/api').then((response) => {return response.json()}).then((dataa) => {
  //     that.setState({
  //       data:  haha,
  //       test: "yeah",
  //     });
  //     console.log(that.state.data);
  //     console.log(that.state.test);
  //   })
  //   .catch(console.error);
  //   console.log('gfsadjk');
  //   }

    // getData(){
    //   setTimeout(() => {
    //     console.log('Our data is fetched');
    //     this.setState({
    //       data: haha,
    //     })
    //   }, 1000)
    // }

    // async getData()
    //   {
    //     const that = this;
    //     try {
    //         const response = await fetch('http://localhost:5000/api');
    //       const dataa = await response.json();
    //       //haha = dataa;
    //       that.setState({
    //         data: dataa,
    //         text: "hallo",
    //       })
    //       console.log(this.state.data);
    //     }
    //     catch(error) {
    //       console.log(error);
    //     }
        
    //   }
    //  componentDidMount(){
    //   this.getData();
    // }

  componentDidMount() {
  const that = this;
  // fetch('http://localhost:5000/api').then((response) => {return response.json()}).then((dataa) => {
  //   //const tmp = dataa;
  //   that.setState({data : dataa, test: "yeah",});
  //   console.log(that.state.data);
  //   console.log(that.state.test);
  //   //console.log(process.env.GENERATE_SOURCEMAP);
  // })
  fetch('https://savig-project.vercel.app/api').then((response) => {return response.json()}).then((dataa) => {
    //const tmp = dataa;
    that.setState({data : dataa, test: "yeah",});
    console.log(that.state.data);
    console.log(that.state.test);
    //console.log(process.env.GENERATE_SOURCEMAP);
  })
  .catch(console.error);
  console.log('gfsadjk');
    // async function getData()
    // {
    //   const response = await fetch('http://localhost:5000/api');
    //   const dataa = await response.json();
    //   //haha = dataa;
    //   console.log(dataa);
    //   this.setState({
    //     data: dataa,
    //   })
    //   //return dataa;
    // }
    // getData();
    // fetchPosts().then(response => {
    //   this.setState({
    //     posts: response.posts
    //   });
    // });

    // fetchComments().then(response => {
    //   this.setState({
    //     comments: response.comments
    //   });
    // });
  }
  render() {

    // var data;
    // async function getData()
    //   {
    //   const response = await fetch('http://localhost:5000/api');
    //   const dataa = await response.json();
    //   data = dataa;
    //   // console.log(data);
    //   //return dataa;
    // }
    // getData();
    //const [fetchError, setFetchError] = React.useState<any>(null)

     var { currentTimeFormatState, messages, data } = this.state;
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await fetch('http://localhost:5000/api');
    //     const dataa = await response.json();
    //     setData(dataa);
    //     // if(data)
    //     //   setData(data);
    //     //   console.log(data) //! for testing
    //     //   setFetchError(null);
    //     // if(error)
    //     // {
    //     //   const errorMessage = error.message || "An error occured"
    //     //   setFetchError(errorMessage)
    //     // }

    //   };
      
    //   fetchData();
    // }, []); 

    // if (this.state.data == null) {
    //   // Render loading state ...
    //   return
    //   <>

    //   </>
    // } 
    // else {
    //    //Render real UI ...
    //   return (
    //     <>
    //     <NotesHeader />
    //       <Container className="mt--9" fluid>
    //         <Card className="shadow border-0">    
    //           <div className="NotesCalendar">
    //             <Col>
    //               <Col>
    //                 <div className="scheduler-container">
    //                   <Scheduler
    //                     events={this.state.data}
    //                     timeFormatState={currentTimeFormatState}
    //                     onDataUpdated={this.logDataUpdate}
    //                   />
    //                 </div>
    //               </Col>
    //             </Col>
    //           </div>
    //         </Card>
    //       </Container>
    //     </>
    //   );
    // }
    
    return (
      <>
      <NotesHeader />
        <Container className="mt--9" fluid>
          <Card className="shadow border-0">    
            <div className="NotesCalendar">
              <Col>
                <Col>
                  <div className="scheduler-container">
                    <Scheduler
                      events={this.state.data}
                      timeFormatState={currentTimeFormatState}
                      onDataUpdated={this.logDataUpdate}
                    />
                  </div>
                </Col>
              </Col>
            </div>
          </Card>
        </Container>
      </>
    );
  }
}
export default Calendar;