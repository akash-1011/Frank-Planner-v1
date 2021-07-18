import React, { useState } from 'react'
import Calendar from 'react-calendar'
import Projects from './Projects'
import './Calender.css'
import { makeStyles,withStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { useStateValue } from './StateProvider';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase)

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

function Calender() {
    const classes = useStyles();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [event, setEvent] = useState('');
    const [person, setPerson] = useState('');
    const [text, setText] = useState('');
    const [,dispatch] = useStateValue();

    const onChangeStart = date => {
        setStartDate(date);
    }

    const onChangeEnd = date => {
      setEndDate(date);
  }

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = async () => {
        await dispatch({
            type: 'ADD_DATA',
            item: {
                startDate:startDate,
                endDate:endDate,
                text:text,
                person:person,
                event:event,
            },
        })
        setOpen(false);
        setStartDate(new Date());
        setEndDate(new Date());
        setEvent('');
        setPerson('');
        setText('');
      };

    const handleEvent = (e) => {
        setEvent(e.target.value)
    }

    const handlePerson = (e) => {
        setPerson(e.target.value)
    }

    return (
        <div className='calendar'>
            <Calendar className='dates' onChange={onChangeStart} value={startDate}/>
            <div className='button'>
            <Button variant="outlined" color="secondary" onClick={handleOpen}>Create New</Button>
            </div>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>New Event</DialogTitle>
        <DialogTitle>Please select Start Date first</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
          <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-customized-textbox">Message</InputLabel>
        <BootstrapInput value={text} onChange={e => setText(e.target.value)} id="demo-customized-textbox" />
      </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Event</InputLabel>
              <Select
                native
                value={event}
                onChange={handleEvent}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value='#9CE4DB'>Blog Infographic</option>
                <option value='#F1A357'>Nike Project</option>
                <option value='#BF74EC'>Envato Meetups</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Person</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={person}
                onChange={handlePerson}
                input={<Input />}
              >
                <MenuItem value="" />
                <MenuItem value='http://placeimg.com/80/81/person'>Bob</MenuItem>
                <MenuItem value='http://placeimg.com/80/82/person'>Ricky</MenuItem>
                <MenuItem value='http://placeimg.com/80/83/person'>Morty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <p className='end'>End Date :</p>
              <Calendar className='dates' onChange={onChangeEnd} value={endDate}/>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
            <Projects />
        </div>
    )
}

export default Calender
