import { useQuery, keepPreviousData } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

function PostsComponent() {
  // useQuery hook
  const {
    data: posts,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    // gcTime (Garbage Collection Time): The time in milliseconds that unused/inactive
    // cache data remains in memory. When a query's cache becomes unused,
    // that cache data will be garbage collected after this duration. Defaults to 5 minutes.
    gcTime: 1000 * 60 * 10, // 10 minutes

    // The time in milliseconds after data is considered stale.
    // Fresh data will be returned from the cache, stale data will be refetched in the background.
    // Defaults to 0.
    staleTime: 1000 * 60 * 5, // 5 minutes

    // If false, queries will not refetch on window focus.
    // Defaults to true.
    refetchOnWindowFocus: false,

    placeholderData: keepPreviousData,
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>An error occurred: {error.message}</div>

  return (
    <div>
      <h2>
        Posts {isFetching ? <small>(updating...)</small> : ''}
      </h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>
              {post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsComponent