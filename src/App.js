import React from 'react';
import BookList from './components/BookList';

function App() {
  return (
    <div
      className="App"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>📚 Book Store</h1>
      <BookList />
    </div>
  );
}

export default App;


