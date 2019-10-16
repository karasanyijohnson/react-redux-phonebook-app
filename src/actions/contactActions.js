import {
    GET_CONTACTS,
    DELETE_CONTACT,
     ADD_CONTACT, 
     GET_CONTACT,
     UPDATE_CONTACT} from './types';
import Axios from 'axios';

///FETCH ALL CONTACTS ///
export const getContacts=()=> async dispatch=>{
    const res= await Axios.get('https://code-catalist-phone-book-rails.herokuapp.com/contacts')
    dispatch ({
            type:GET_CONTACTS,
            payload:res.data
        })
       }

///FETCH A SINGLE CONTACT IN UPDATE FORM
export const getContact=(id)=> async dispatch=>{
    const res= await Axios.get(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`)
    dispatch ({
            type:GET_CONTACT,
            payload:res.data
        })
       }
/// action delete
export const DeleteContact= (id) => async dispatch=> {
    try{
        await Axios.delete(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`)
         dispatch({
            type:DELETE_CONTACT,
            payload:id
            });
    } catch(e){
        dispatch({
            type:DELETE_CONTACT,
            payload:id
            });
         }
        }
        
 /// action add newcontact
export const addContact=(contact)=> async dispatch=>{
    const res= await Axios.post('https://code-catalist-phone-book-rails.herokuapp.com/contacts/',contact)
    dispatch({
        type:ADD_CONTACT,
        payload:res.data
    })
    }
/// action updatecontact
export const updateContact=(contact)=> async dispatch=>{
    const res= await Axios.put(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${contact.id}`,contact)
    dispatch({
        type:UPDATE_CONTACT,
        payload:res.data
    })
}