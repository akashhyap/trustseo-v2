export const LatestPosts = ({data}) => {
    console.log("POSTS", data);
    return (
        <div dangerouslySetInnerHTML={{__html: data.content}}></div>
    )
}