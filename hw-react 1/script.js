const myProjekt = (
    <div class='border'>
        <div class='border-orange'>
            <h2 class='botton-red'>Hello</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae
                natus iste mollitia, deserunt quod tempora consequuntur quam laudantium
                reiciendis dignissimos doloribus beatae sapiente? Eveniet asperiores
                quos deserunt rerum aspernatur! Ullam eos adipisci illo nesciunt
                delectus. Itaque id sapiente suscipit amet temporibus dicta asperiores
                sequi tenetur aspernatur aut, iure beatae cumque quibusdam eaque a
                maxime facere non pariatur distinctio ad.
            </p>
            <button class='bgc-red'>NEXT</button>
        </div>
        <div>
            <p class='border-blue'>Typography</p>
            <h2>Text Align</h2>
            <p class='opacity'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class='big-bottom'>
            <button class='big-bottom-btn'>BUTTON 1</button>
        </div>
        <div class='bottom-text'>
            <form>
                <label for='name'>Enter your name:</label><br></br>
                <input type='text' id='name'/><br></br>
                <label for='email'>Enter your email:</label><br></br>
                <input type='email' id='email'/>
            </form>
        </div><br></br>
        <button class='qwert'>Subscribe!</button> 
    </div>
);

const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(myProjekt);