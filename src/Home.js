export default function Home()
{
    const handleClick = (e) => {
        console.log('hello ninjas', e);
    }

    const handleClickAgain = (name1, e) => {
        console.log('hello' + name1 ,e.target);
    }

return (
<div className="home">
<h2>Homepage</h2>
<button onClick={handleClick}>Click me</button>
<button onClick={(e) => handleClickAgain('mario',e)}>Click me</button>
</div>
);

}
