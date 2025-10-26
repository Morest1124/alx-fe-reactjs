import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import PostsComponent from './components/PostsComponent'

// Create a client
const queryClient = new QueryClient()

function App() {
  const [showPosts, setShowPosts] = useState(true)

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <header className="hero">
          <h1>React Query Demo</h1>
          <p className="hero-sub">Fetching, caching, and refetching data.</p>
        </header>
        <button onClick={() => setShowPosts(!showPosts)}>
          {showPosts ? 'Hide Posts' : 'Show Posts'} {isFetching ? <small>(updating...)</small> : ''}
        </button>
        <main>
          {showPosts && <PostsComponent />}
        </main>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
