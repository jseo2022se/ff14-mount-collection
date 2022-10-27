import Card from "react-bootstrap/Card"

export default function About () {
    return (
        <div>
            <Card border="dark">
                <Card.Body>
                    <Card.Title><h1>About This Website</h1></Card.Title>                
                    <Card.Img style={{width: '50%'}} variant="top" src='https://preview.redd.it/52wy1i1qhjn11.png?auto=webp&s=0c202b92cf1e258264dd1ad6f5908718566c5f8b' alt='alpha'/>
                    <br /><br />
                    <h5> 
                        This site fetches data using a public API from: "https://ffxivcollect.com/".<br />
                        On this site, one can search up mounts available on FF14 and organize them by
                        the following categories: 'My Collection' and 'My Wishlist'.<br/>
                        Feel free to play around this site!<br/><br/>

                        <br />
                        All credits regarding the API go to:<br/>
                        Raelys Skyborn of Behemoth | Powered by <a href="https://github.com/ufx/SaintCoinach">Saint Coinach</a> |<br/><br/>

                        
                        
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.<br/>
                        FINAL FANTASY XIV © SQUARE ENIX CO., LTD.
                    </h5>
                </Card.Body>
                
            </Card>
        </div>
    )
}