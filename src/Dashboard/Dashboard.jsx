/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import Avatar from './Avatar.jsx'

const Dashboard = () => {

  const [tasks, setTasks] = useState([])

  const fullName = localStorage.getItem('fullName') || 'Yaxshimisan'
  const phone = localStorage.getItem('phone') || 'Nomer kiritilmagan'

  const avatar = localStorage.getItem('avatar')

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(storedTasks)
  }, [])

  const Ochish = () => window.location.href = '/dashboard'

  const Logout = () => {
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  const deleteTask = (id) => {
    if(window.confirm('Vazifani ochirasizmi?')) {
      const updatedTasks = tasks.filter(t => t.id !== id)
      setTasks(updatedTasks)
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }
  }

  const moveTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        if(task.status === 'todo') return { ...task, status: 'progress' }
        if(task.status === 'progress') return { ...task, status: 'done' }
      }
      return task
    })
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const openProfile = () => window.location.href = '/profil'
  const openAddCard = () => window.location.href = '/add'

  const todoTasks = tasks.filter(t => t.status === 'todo')
  const progressTasks = tasks.filter(t => t.status === 'progress')
  const doneTasks = tasks.filter(t => t.status === 'done')

  const renderCard = (task) => (
    <div className="card" key={task.id}>
      <h3>{task.title}</h3> 
      <p>{task.desc}</p>
      <div className="card-footer">
        <span className={task.priority === 'low' ? 'low' : 'medium'}>
          {task.priority}
        </span>
        
        <h6>{task.date}</h6>
        {task.status !== 'done' && (
          <i id='ong' onClick={() => moveTask(task.id)} className="fa-solid fa-arrow-right fa-bounce"></i>
        )}
        {task.status === 'done' && (
          <i id='belet' onClick={() => deleteTask(task.id)} className="fa-solid fa-trash-can fa-bounce"></i> 
        )}
      </div>
    </div>
  )

  return (
    <div>
      <nav>
        <div onClick={Ochish} className="logobu">
          <h1 className='logobuo'>TaskFlow</h1>
        </div>

        <div id='su' className="namee" onClick={openProfile}>
          {avatar ? (
            <img
              src={avatar}
              alt={fullName}
              style={{
                height: '42px',
                width: '42px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #fff',
                cursor: 'pointer',
                transition: '0.2s',
                display: 'block'
              }}
            />
          ) : (
            <Avatar name={fullName} size={42} />
          )}
        </div>

        <div className="profile-image">
          <i id="bir" className="fa-solid fa-arrow-right-from-bracket" onClick={Logout}></i>
        </div>
      </nav>

      <header>
        <div className="salomLashuv">
          <h3>Welcome <b>{fullName}</b>!</h3>
          <p>What is due today?</p>
        </div>
        <div className="phoneNumber">
          <p>User phone number</p>
          <h3><b>{phone}</b></h3>
        </div>
      </header>

      <div style={{padding: "20px"}}>
        <button className="add-task-btn" onClick={openAddCard}>+ Yangi Vazifa</button>
      </div>

      <main className="board">
        <div className="box">
          <div className="box-header">
            <h6>To Do</h6>
          </div>
          {todoTasks.length > 0 ? todoTasks.map(renderCard) : <div className="empty-card">Vazifa Yoq</div>}
        </div>

        <div className="box">
          <div className="box-header">
            <h6>In Progress</h6>
          </div>
          {progressTasks.length > 0 ? progressTasks.map(renderCard) : <div className="empty-card">Vazifa Yoq</div>}
        </div>

        <div className="box">
          <div className="box-header">
            <h6>Done</h6>
          </div>
          {doneTasks.length > 0 ? doneTasks.map(renderCard) : <div className="empty-card">Vazifa Yoq</div>}
        </div>
      </main>

      <hr />
      <footer>
        <p><b onClick={Ochish}>TaskFlow</b> - Online To Do Platform</p>
      </footer>
    </div>
  )
}

export default Dashboard