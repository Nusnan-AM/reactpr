import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react'
import SearchItem from './SearchItem';
import apiRequest from './ApiRequest';

function App() {
  const [fetchError,setfetchError] =useState(null)
  const [isLoading,setIsLoading] = useState(true)
  const [items, setItems] = useState(
    []
  );
  const [search,setSearch] = useState('')
  const API_URL ='http://localhost:3500/items';
  useEffect(() =>{
      const fetchItems = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) throw Error(
            "Data not recieved"
          ) 
          const listItems = await response.json();
          setItems(listItems)
          setfetchError(null)
        } catch (err) {
          setfetchError(err.message)
        } finally{
          setIsLoading(false)
        }
      }
      setTimeout(() => {
        (async() =>await fetchItems())()
      },2000)
     
  },[])



 useEffect(()=> {

 },[] )

  const handleCheck = (id) => {
    const listItems =items.map(
      (item) => item.id ===id ? {...item, checked:!item.checked} : item
    )
    setItems(listItems)
     }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
  
  }
  const [newItem, setnewItem] = useState('');
  const addItem = async (item) => {
    const id =items.length? items[items.length -1].id + 1 :1;
    const addNewItem ={id,checked:false, item}
    const listItems =[...items, addNewItem]
    setItems(listItems)
    const postOptions ={
      method :'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL,postOptions)
    if (result) setfetchError(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setnewItem('')
  }

  return (
    <div className="App">
            <Header title="My To do"/>
            <AddItem 
            newItem = {newItem}
            setnewItem ={setnewItem}
            handleSubmit ={handleSubmit}
            />
            <SearchItem
            search ={search}
            setSearch={setSearch}
            />
            {isLoading && <p>Loading...</p>}
            {fetchError && <p>{`Error: ${fetchError}`}</p>}
            { !isLoading && !fetchError &&<Content
            items ={items .filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
            handleCheck ={handleCheck}
            handleDelete ={handleDelete}
            />}
            <Footer
            length ={items.length}
            />
    </div>
  );
}

export default App;
