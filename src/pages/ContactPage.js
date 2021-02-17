const AboutPage = ({ goto }) => (

    <div style={{ height: '100vh', backgroundColor: 'red' }}>
        <h1>CONTACT PAGE</h1>
        <p>Navigate: 
          <a onClick={goto('home')}>Home</a>
          &nbsp;|&nbsp;
          <a onClick={goto('about')}>About</a>
          &nbsp;|&nbsp;
          <a onClick={goto('contact')}>Contact</a>
        </p>
        <p>Massa tincidunt nunc pulvinar sapien et ligula. Commodo elit at imperdiet dui accumsan sit amet. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Leo duis ut diam quam nulla porttitor massa id. Dui sapien eget mi proin sed libero. Lacus vel facilisis volutpat est. Fringilla ut morbi tincidunt augue interdum velit euismod in. Tincidunt lobortis feugiat vivamus at augue. Diam donec adipiscing tristique risus nec. Amet purus gravida quis blandit turpis cursus. In vitae turpis massa sed elementum tempus egestas sed. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Lobortis elementum nibh tellus molestie nunc non. Volutpat lacus laoreet non curabitur gravida arcu ac tortor.</p>
   </div>
)

export default AboutPage;
