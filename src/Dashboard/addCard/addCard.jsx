import React, { useState } from 'react'
import './addCard.css'

const AddCard = () => {

 
  const today = new Date().toISOString().split('T')[0]

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [priority, setPriority] = useState('low')

  const goBack = () => {
    window.history.back()
  }

  const handleAdd = () => {
    if (!title.trim()) {
      alert("Vazifa nomini kiriting!")
      return
    }

    const newTask = {
      id: Date.now(),
      title,
      desc,
      priority,
      date: today,     
      status: "todo"   
    }

    const oldTasks = JSON.parse(localStorage.getItem('tasks')) || []

    const updatedTasks = [...oldTasks, newTask]

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))

    window.location.href = '/dashboard'
  }

  return (
    <div className="add-container">

    
      <div className="top-bar">
        <i onClick={goBack} className="fa-solid fa-arrow-left"></i>
        <h2>Yangi Vazifa</h2>
      </div>

      <div className="form">

        <input 
          type="text"
          placeholder="Vazifa nomi"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Vazifa haqida batafsil"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <select 
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low priority</option>
          <option value="medium">Medium priority</option>
        </select>

       
        

        <button onClick={handleAdd}>Qo‘shish</button>

      </div>

    </div>
  )
}

export default AddCard