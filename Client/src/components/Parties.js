import styled from "styled-components";


export function Parties() {
    return (
        <>
            <PartiesCss>
                <body>
                    <div className="mycontainer">
                        <h1>Nominated Parties</h1>
                    </div>
                    <div className="row">
                        <div className="card">
                            <a href="#">
                                <img src="bjp.png"/>
                            </a>
                            <h2>Bhartiya Janta Party</h2>
                            <br />
                            <p>
                                The Bharatiya Janata Party is a political party in India, and one of the
                                two major Indian political parties alongside the Indian National
                                Congress. Since 2014, it has been the ruling political party in India
                                under Narendra Modi, the incumbent Indian prime minister.
                            </p>
                        </div>
                        <div className="card">
                            <a href="#">
                                <img src="congress.png" />
                            </a>
                            <h2>National Congress Party</h2>
                            <br />
                            <p>
                                {" "}
                                The Indian National Congress, colloquially the Congress Party but often
                                simply the Congress, is a political party in India with widespread
                                roots. Founded in 1885, it was the first modern nationalist movement to
                                emerge in the British Empire in Asia and Africa.
                            </p>
                        </div>
                        <div className="card aap">
                            <a href="#">
                                <img src="AAP.webp" />
                            </a>
                            <h2>AAM Aadmi Party</h2>
                            <br />
                            <p>
                                {" "}
                                The Aam Aadmi Party is a political party in India. The AAP was founded
                                in November 2012 by Arvind Kejriwal and his then companions following
                                the 2011 Indian anti-corruption movement, popularly known as Anna
                                Andolan.
                            </p>
                        </div>
                    </div>
                    <div className="card cpi">
                        <a href="#">
                            <img src="CPI.jpg" />
                        </a>
                        <br />
                        <h2>Communist Party Of India</h2>
                        <br />
                        <p>
                            The Communist Party of India is the oldest Marxist–Leninist communist
                            party in India and one of the eight national parties in the country. The
                            CPI was founded in modern-day Kanpur on 26 December 1925.Currently their
                            leader is D.Raja ..
                        </p>
                    </div>
                    </body>
            </PartiesCss>
        </>

    )
}

const PartiesCss = styled.body`
* {
    margin: 0;
    padding: 0;
}

body {
    background:linear-gradient( #c55b09, #fff,green);

    margin-top:-5vh;
    
}

img {
    transform-origin: 0 0;
    transition: trasnform .50s, visibility .50s ease-in;

}

img:hover {
    transform: scale(1.1);
}

.head {
    height: 7vh;
    background: transparent;
    font-size: 33px;
    font-family: 'Fugaz One', cursive;
    font-family: 'Signika Negative', sans-serif;
    text-align: center;
    color: black;
    text-decoration: underline;

    padding-top: 10px;



}

.head a {
    float: right;
}

.head img {
    margin-right: 10px;
}





.row {
    display: flex;
    justify-content: center;
}

.card {
 
    width: 30%;
    height: 500px;
    margin: 15px;
    margin-top: 75px;
    text-align: center;
    height: 400px;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    transition: box-shadow .3s;
    border-radius: 10px;
    box-shadow: 0 0 3px 3px rgb(204, 204, 204);
    padding: 10px;
    padding-top: 50px;
}

.card:hover {
    box-shadow: 0 0 3px 3px rgb(12, 2, 117);
    background-color: white;
}
.card h2:hover{
    font-size: 35px;
}

.card h2 {
    text-transform: capitalize;
    margin-bottom: 15px;
    font-size: 30px;
    color: rgb(0, 0, 0);
}

.card p {
    text-transform: capitalize;
    margin-bottom: 15px;
    font-size: 16px;
    /* color: rgb(124, 124, 124); */
    color:black;
    line-height: 1.8;
}

.card img {
    width: 100px;
    margin-bottom: 30px;
    border-radius: 50%;
    height: 85px;
}

.mycontainer {
    text-align: center;
    margin-top: 40px;


}

.mycontainer h1 {
    text-align: center;
    margin-top: 40px;
    color: black;
    font-size: 40px;

}

.cpi{
    /* align-items: center; */
    margin-left: 65vh;
    margin-bottom: 2vh;
}
.aap img{
    margin-top: -17px;
    height: 100px;
    width: 110px;
}
`;