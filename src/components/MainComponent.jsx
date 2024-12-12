import CardComponent from "./CardComponent";

export default function MainComponent({ posts }) {
    const validPosts = posts.filter((post) => post.id !== -1)
    // console.log(validPosts);
    return (
        <main className="container mx-auto w-50 mb-5">
            <CardComponent posts={validPosts} />
        </main>
    )
}