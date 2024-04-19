import { Link, useLoaderData } from "react-router-dom";

let Blog = () => {
    let {posts} = useLoaderData()
    return  <>
                <ul>
                    {posts.map((post => (
                        <li key={post.id}>
                            <Link to={`/blog/${post.id}`}>{post.id} - {post.title}</Link>
                        </li>   
                    )))}
                </ul>
            </>
};

export default Blog

export let LoaderBlog = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let posts = await response.json()

    return {posts}
}



