import image from './images/notfound-image.png'

export default function Notfound() {
    return (
        <div id="not-found">
            <h1>ERROR #404 Page not found</h1>
            <h2><span>Back to home </span><a href="http://localhost:3000/home">CLICK HERE</a></h2>
            <img src={image} alt="" />
        </div>
    )
}