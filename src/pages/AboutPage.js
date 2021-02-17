const AboutPage = ({ goto }) => (

    <div style={{ height: '100vh', backgroundColor: 'yellow' }}>
        <h1>ABOUT US!</h1>
        <p>Navigate: 
          <a onClick={goto('home')}>Home</a>
          &nbsp;|&nbsp;
          <a onClick={goto('about')}>About</a>
          &nbsp;|&nbsp;
          <a onClick={goto('contact')}>Contact</a>
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Dignissim sodales ut eu sem integer vitae justo eget magna. Convallis posuere morbi leo urna molestie at elementum. Facilisis sed odio morbi quis commodo odio. Enim diam vulputate ut pharetra sit amet aliquam. In cursus turpis massa tincidunt dui ut. Consectetur adipiscing elit pellentesque habitant morbi tristique. Augue mauris augue neque gravida in fermentum et sollicitudin. Nibh sed pulvinar proin gravida hendrerit lectus. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Lectus mauris ultrices eros in cursus turpis massa.</p>
        <p>Tellus mauris a diam maecenas sed. Ipsum consequat nisl vel pretium. Mauris vitae ultricies leo integer. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Vulputate ut pharetra sit amet aliquam. Gravida neque convallis a cras semper auctor neque. Eget duis at tellus at urna condimentum. Feugiat scelerisque varius morbi enim nunc faucibus a. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Pellentesque diam volutpat commodo sed egestas.</p>
   </div>
)

export default AboutPage;
