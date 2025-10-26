import { useState } from 'react'
import { QueryClient, QueryClientProvider, useIsFetching } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import PostsComponent from './components/PostsComponent'

// Create a client
const queryClient = new QueryClient()

function GlobalFetchingIndicator() {
  const isFetching = useIsFetching()
  return isFetching > 0 ? <div className="fetching-indicator">Queries are fetching...</div> : null
}

function App() {
  const [showPosts, setShowPosts] = useState(true)
  const isFetching = useIsFetching()

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalFetchingIndicator />
      <AppContent showPosts={showPosts} setShowPosts={setShowPosts} isFetching={isFetching > 0} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

function AppContent({ showPosts, setShowPosts, isFetching }) {
  return (
      <div className="container">
        <header className="hero">
          <h1>React Query Demo</h1>
          <p className="hero-sub">Fetching, caching, and refetching data.</p>
        </header>
        <button onClick={() => setShowPosts(!showPosts)}>
          {showPosts ? 'Hide Posts' : 'Show Posts'} {isFetching && <small>(updating...)</small>}
        </button>
        <main>
          {showPosts && <PostsComponent />}
        </main>
      </div>
  )
}

export default App
