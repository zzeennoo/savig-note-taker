import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';

const scheduler = window.scheduler;
//scheduler.config.api_date="%Y-%m-%d %H:%i";
export default class Scheduler extends Component {

    constructor(props) {
        super(props);
        this.state = {
          events: props.events,
          timeFormatState: props.timeFormatState,
          onDataUpdated : props.onDataUpdated,

      };
    }
    initSchedulerEvents() {
        //const onDataUpdated = this.props.onDataUpdated;
        // if (scheduler._$initialized) {
        //     return;
        // }



        // scheduler.attachEvent("onBeforeEventCreated", function (e){
        //     return true;
        // });
        // scheduler.attachEvent("onBeforeEventDragOut", function (id, ev, e){
        //     //any custom logic here
           
        //     return true;
        // });
        scheduler.attachEvent('onEventAdded', (id, ev) => {
            //scheduler.date.date_to_str("%d/%m/%Y")
            // var formatFunc = scheduler.date.date_to_str("%Y-%m-%d %H:%i");
            // var start_datee = formatFunc(scheduler.getEvent(id).start_date);
            // var end_datee = formatFunc(scheduler.getEvent(id).end_date);
            // console.log(start_datee);
            // console.log(end_datee);
        //window.prompt(scheduler.getEvent(id))
            if (this.state.onDataUpdated) {
                this.state.onDataUpdated('create', ev, id);
            }



            //  var newEvent = ev;
            //  var events = [
            //     newEvent,
            //     ...this.state.events
            // ];


            // this.setState({
            //     events: events,
            //     timeFormatState: this.props.timeFormatState,
            //   onDataUpdated : this.props.onDataUpdated,
            // })

            // scheduler.init(this.schedulerContainer, new Date(2023, 10, 20));
            // scheduler.clearAll();
            // scheduler.parse([
            //         { start_date:'2023-11-25 6:00', end_date:'2023-11-25 9:00', text:'Event 1', id: 1},
            //         { start_date:'2023-11-22 10:00', end_date:'2023-11-22 18:00', text:'Event 2', id: 2 },
            //         { start_date:'2023-11-26 10:00', end_date:'2023-11-26 12:00', text:'Event 1', id: 3},
            //         { start_date:'2023-11-23 10:00', end_date:'2023-11-23 12:00', text:'Event 1', id: 4},
            //         //{start_date: 'Tue Nov 21 2023 02:10:00 ', end_date: 'Tue Nov 21 2023 07:15:00 ', text: 'fs', id: 1704085403824,},
            //       ]);
            //scheduler.parse(events);
            //console.log(ev);
        });

        scheduler.attachEvent('onEventChanged', (id, ev) => {
            if (this.state.onDataUpdated) {
                this.state.onDataUpdated('update', ev, id);
            }
        });

        scheduler.attachEvent('onEventDeleted', (id, ev) => {
            if (this.state.onDataUpdated) {
                this.state.onDataUpdated('delete', ev, id);
            }
        });
        scheduler._$initialized = true;
    }

    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
        scheduler.config.hour_date = '%H:%i';
        scheduler.xy.scale_width = 70;

        this.initSchedulerEvents();

        //const { events } = this.props;
        this.setState({
            events: this.props.events,
            timeFormatState: this.props.timeFormatState,
          onDataUpdated : this.props.onDataUpdated,
        })
        scheduler.init(this.schedulerContainer, new Date());
        scheduler.clearAll();
        scheduler.parse(this.state.events);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.events == nextProps.events) return;
        // scheduler.skin = 'material';
        // scheduler.config.header = [
        //     'day',
        //     'week',
        //     'month',
        //     'date',
        //     'prev',
        //     'today',
        //     'next'
        // ];
        // scheduler.config.hour_date = '%H:%i';
        // scheduler.xy.scale_width = 70;

        //  this.initSchedulerEvents();

        //const { events } = this.props;
        this.setState({
            events: nextProps.events,
            timeFormatState: nextProps.timeFormatState,
           onDataUpdated : nextProps.onDataUpdated,
        })
        //scheduler.init(this.schedulerContainer, new Date(2023, 10, 20));
        //scheduler.clearAll();
        //scheduler.init(this.schedulerContainer, new Date(2023, 10, 20));
        //scheduler.clearAll();
        scheduler.parse(nextProps.events);
        console.log('asas');
    }
    // static getDerivedStateFromProps(props, state)
    // {
        
    // }
    shouldComponentUpdate(nextProps) {
        //return this.props.timeFormatState !== nextProps.timeFormatState || this.props.events !== nextProps.events;
        return true;
    }
    componentWillUpdate()
    {
        
    }
    componentDidUpdate(nextProps) {
        // if(this.state.events == nextProps.events) return;
        // scheduler.skin = 'material';
        // scheduler.config.header = [
        //     'day',
        //     'week',
        //     'month',
        //     'date',
        //     'prev',
        //     'today',
        //     'next'
        // ];
        // scheduler.config.hour_date = '%H:%i';
        // scheduler.xy.scale_width = 70;

        // this.initSchedulerEvents();

        // //const { events } = this.props;
        // this.setState({
        //     events: nextProps.events,
        //     timeFormatState: nextProps.timeFormatState,
        //    onDataUpdated : nextProps.onDataUpdated,
        // })
        // scheduler.init(this.schedulerContainer, new Date(2023, 10, 20));
        // scheduler.clearAll();
        // scheduler.parse(nextProps.events);
        // console.log('asas');
    }

    setHoursScaleFormat(state) {
        scheduler.config.hour_date = '%H:%i';
        scheduler.templates.hour_scale = scheduler.date.date_to_str(scheduler.config.hour_date);
    }

    render() {
        var { timeFormatState } = this.state.timeFormatState;
        this.setHoursScaleFormat(timeFormatState);
        return (
            <div
                className='calendar'
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '100%', height: '100%' } }
            ></div>
        );
    }
}
