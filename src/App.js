import { Component } from "react";
import styles from './Phonebook.module.css';
import Conteiner from './components/Conteiner'
import ContactList from "./components/ContactList";
import Filter from './components/Filter';
import Form from './components/Form';
import { v4 as uuidv4 } from 'uuid';

class App extends Component{
  state = {
    contacts: [],    
    filter:''
  };
  componentDidMount(){
   const contacts = localStorage.getItem('contacts');
   const parsedContacts = JSON.parse(contacts);  
   if (parsedContacts) {
    this.setState({contacts: parsedContacts });
   }
 }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts) )
    }
  }
  nameId = uuidv4();
  addContact = ({name,number}) => {    
    const contact = {
      id: uuidv4(),
      name,
      number,
    }; 
    this.setState(prevState => {    
      const sad = prevState.contacts.find(Pcont => Pcont.name === contact.name);     
      return sad !== undefined? alert(`${contact.name} is already in contacts`)
      :{contacts: [contact, ...prevState.contacts],}
    })    
  };
  
  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value
    });
  };
  deleteContacts = nameId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== nameId),
    }));
  };
  getVisibleContacts = () => {
    const {contacts} = this.state;    
    const {filter}= this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => 
      contact.name.toLocaleLowerCase().includes(normalizedFilter))
  };
 
  render(){       
    const {filter}= this.state;
    const visibleContacts = this.getVisibleContacts();    
    return(
      <Conteiner >
        <h1 className={styles.titleHead} >Phonebook</h1>
        <Form onHandleChange = {this.addContact} />
        <h2 className={styles.title} >Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />         
        <ContactList 
        onDelete = {this.deleteContacts}
        contacts = {visibleContacts} />
      </Conteiner>      
    )};
};

export default App;

// reset = () => {
  //   this.setState({
  //     name:'',
  //     number: ''
  //   });
  // };